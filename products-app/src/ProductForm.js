// ProductForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductForm = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    if (productId) {
      axios.get(`/api/products/${productId}`).then(response => {
        setProduct(response.data);
      });
    }
  }, [productId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiEndpoint = productId ? `/api/products/${productId}` : '/api/products';
    const method = productId ? 'put' : 'post';

    axios[method](apiEndpoint, product).then(() => {
      navigate('/products');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
      <textarea value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })}></textarea>
      <input type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
