import api from "../services/api";

function Products({ products, fetchProducts }) {

  const deleteProduct = async (id) => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  const updateProduct = async (product) => {
    const name = prompt("Enter Product Name", product.name);
    const sku = prompt("Enter SKU", product.sku);
    const price = prompt("Enter Price", product.price);
    const stock = prompt("Enter Stock", product.stock_quantity);

    await api.put(`/products/${product.id}`, {
      name,
      sku,
      price: Number(price),
      stock_quantity: Number(stock),
    });

    fetchProducts();
  };

  return (
    <div>
      <h2>Products</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.price}</td>
              <td>{product.stock_quantity}</td>

              <td>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>

              <td>
                <button onClick={() => updateProduct(product)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;