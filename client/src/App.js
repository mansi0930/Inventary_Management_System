import React from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App(){ 
  return (
    <div className="container py-4">
      <h1 className="mb-4">Inventory Management</h1>
      <AddProduct />
      <hr />
      <ProductList />
    </div>
  );
}
export default App;
