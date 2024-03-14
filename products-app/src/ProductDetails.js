// ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import axios from 'axios';

const ProductDetails = ({ onProductDelete }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${productId}`).then(response => {
      setProduct(response.data);
    });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <DeleteButton productId={productId} onDelete={onProductDelete} />
    </div>
  );
};

export default ProductDetails;
