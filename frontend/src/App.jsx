import { useState, useEffect } from "react";
import api from "./services/api";

import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";
import AddCustomer from "./pages/AddCustomer";
import AddOrder from "./pages/AddOrder";

function App() {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  };

  const fetchCustomers = async () => {
    const response = await api.get("/customers");
    setCustomers(response.data);
  };

  const fetchOrders = async () => {
    const response = await api.get("/orders");
    setOrders(response.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCustomers();
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Inventory Management System</h1>

      <AddProduct fetchProducts={fetchProducts} />
      <hr />

      <AddCustomer fetchCustomers={fetchCustomers} />
      <hr />

      <AddOrder fetchOrders={fetchOrders} />
      <hr />

      <Products
        products={products}
        fetchProducts={fetchProducts}
      />
      <hr />

      <Customers
        customers={customers}
        fetchCustomers={fetchCustomers}
      />
      <hr />

      <Orders
        orders={orders}
        fetchOrders={fetchOrders}
      />
    </div>
  );
}

export default App;