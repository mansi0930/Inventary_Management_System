import React, { useEffect, useState } from "react";
import api from "../api";
import "../styles.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", quantity: "" });

  // load products
  useEffect(() => {
    api.get("/products").then((r) => setProducts(r.data));
  }, []);

  // delete product
  const remove = async (id) => {
    if (!window.confirm("Are you sure to delete this product?")) return;
    await api.delete(`/products/${id}`);
    setProducts(products.filter((p) => p._id !== id));
  };

  // open modal
  const startEdit = (product) => {
    setEditProduct(product);
    setForm({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    });
  };

  // save update
  const handleUpdate = async () => {
    const res = await api.put(`/products/${editProduct._id}`, form);

    setProducts(products.map((p) =>
      p._id === editProduct._id ? res.data : p
    ));

    setEditProduct(null);
  };

  return (
    <>
      <div className="table-wrapper">
        <h4 className="mb-3">Product List</h4>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th style={{ width: "150px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>₹ {p.price}</td>
                <td>{p.quantity}</td>
                <td>
                  <button
                    className="btn-custom btn-edit me-2"
                    onClick={() => startEdit(p)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn-custom btn-delete"
                    onClick={() => remove(p._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editProduct && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h5>Edit Product</h5>

            <input
              className="form-control"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="form-control"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <input
              className="form-control"
              placeholder="Quantity"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            />

            <div className="d-flex mt-3 justify-content-end">
              <button
                className="btn btn-save me-2"
                onClick={handleUpdate}
              >
                Save
              </button>

              <button
                className="btn btn-cancel"
                onClick={() => setEditProduct(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
