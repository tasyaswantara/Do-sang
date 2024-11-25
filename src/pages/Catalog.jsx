import React from 'react';
import { products } from '../dummyData';
import CatalogCard from '../components/CatalogCard';

const Catalog = () => (
  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {products.map(product => (
      <CatalogCard key={product.id} product={product} />
    ))}
  </div>
);

export default Catalog;
