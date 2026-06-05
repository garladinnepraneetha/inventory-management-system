import { useState } from "react";
import api from "../services/api";

function AddOrder() {
  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/orders", {
      customer_id: Number(customerId),
      product_id: Number(productId),
      quantity: Number(quantity),
    });

    alert("Order Created");

    setCustomerId("");
    setProductId("");
    setQuantity("");
  };

  return (
    <div>
      <h2>Add Order</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />

        <input
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />

        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit">
          Create Order
        </button>
      </form>
    </div>
  );
}

export default AddOrder;