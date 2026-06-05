import { useState } from "react";
import api from "../services/api";

function AddCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/customers", {
      name,
      email,
      phone,
    });

    alert("Customer Added");

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>Add Customer</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">
          Add Customer
        </button>
      </form>
    </div>
  );
}

export default AddCustomer;