import React from 'react';
import FacadeService from '../services/FacadeService';

const CatalogCard = ({ product }) => (
  <div className="border rounded-lg shadow-md p-4">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
    <h3 className="text-lg font-bold">{product.name}</h3>
    <p>{FacadeService.formatCurrency(product.price)}</p>
  </div>
);

export default CatalogCard;
