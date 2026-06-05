import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import AddProduct from "../src/pages/AddProduct";
import AddCustomer from "./pages/AddCustomer";
import AddOrder from "./pages/AddOrder";

function App() {
  return (
    <div>
      <h1>Inventory Management System</h1>

      <AddProduct />
      <hr/>

      <AddCustomer />
      <hr/>
      <AddOrder />
      <hr/>

      <Products />
      <hr />

      <Customers />
      <hr />

      <Orders />
    </div>
  );
}

export default App;