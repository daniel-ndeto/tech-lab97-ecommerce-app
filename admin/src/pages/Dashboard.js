// admin/src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: '',
    description: '',
    price: '',
    rating: '',
    image: '',
    category: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      console.log('Fetched products:', res.data);
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e) => {
    setCurrentProduct({
      ...currentProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = () => {
    console.log('Add New Product clicked');
    setCurrentProduct({
      name: '',
      description: '',
      price: '',
      rating: '',
      image: '',
      category: '',
    });
    setIsEditing(false);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', currentProduct);
    if (isEditing) {
      try {
        const res = await axios.put(
          `http://localhost:5000/api/products/${currentProduct._id}`,
          currentProduct
        );
        console.log('Updated product:', res.data);
        setProducts(
          products.map((prod) =>
            prod._id === currentProduct._id ? res.data : prod
          )
        );
        setShowForm(false);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    } else {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/products',
          currentProduct
        );
        console.log('Added product:', res.data);
        setProducts([...products, res.data]);
        setShowForm(false);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${productId}`);
        console.log(`Deleted product with id: ${productId}`);
        setProducts(products.filter((prod) => prod._id !== productId));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin panel of TECH-LAB97.</p>

      <section className="summary">
        <h3>Summary</h3>
        <p>Total Products: {products.length}</p>
      </section>

      <section className="product-management">
        <h3>Product Management</h3>
        <button onClick={handleAddProduct}>Add New Product</button>

        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>{product.rating}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => handleEditProduct(product)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteProduct(product._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {showForm && (
        <section
          className="product-form"
          style={{ border: '1px solid #ddd', padding: '1rem', marginTop: '1rem' }}
        >
          <h3>{isEditing ? 'Edit Product' : 'Add New Product'}</h3>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={currentProduct.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                name="description"
                value={currentProduct.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={currentProduct.price}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Rating:
              <input
                type="number"
                step="0.1"
                name="rating"
                value={currentProduct.rating}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                value={currentProduct.image}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={currentProduct.category}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <div className="form-actions">
              <button type="submit">
                {isEditing ? 'Update Product' : 'Add Product'}
              </button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}

export default Dashboard;
