import React from "react";
import FacadeService from "../services/FacadeService";

const CatalogCard = ({ product }) => (
  <div className="bg-white rounded-3xl shadow-md overflow-hidden h-auto ">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-52 object-cover"
    />
    <div className="p-4 relative h-[90px]">
      <h3 className="text-base font-bold ">{product.name}</h3>
      <p className="text-lg text-[#5A2B2B] ">
        {FacadeService.formatCurrency(product.price)}
      </p>
      <div className="flex items-center mt-2 absolute top-2 right-4">
        <span className="text-yellow-400 text-sm mr-1">⭐</span>
        <span className="text-sm text-gray-600">{product.rating}</span>
      </div>
    </div>
  </div>
);

export default CatalogCard;
