import React, { useState } from "react";
import api from "../api";
import "../styles.css"; // import CSS

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products", {
        name,
        price: Number(price),
        quantity: Number(quantity),
      });

      alert("Product Added Successfully ✔️");

      // clear form
      setName("");
      setPrice("");
      setQuantity("");

      window.location.reload(); // refresh list
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="add-card">
      <h4>Add New Product</h4>

      <form onSubmit={submit} className="row g-3">
        <div className="col-md-4">
          <input
            className="form-control add-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            required
          />
        </div>

        <div className="col-md-3">
          <input
            type="number"
            className="form-control add-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
          />
        </div>

        <div className="col-md-3">
          <input
            type="number"
            className="form-control add-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            required
          />
        </div>

        <div className="col-md-2">
          <button className="btn add-btn w-100">Add</button>
        </div>
      </form>
    </div>
  );
}
