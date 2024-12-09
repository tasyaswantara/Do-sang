import React from "react";
import CatalogCard from "./CatalogCard";
import { products } from "../dummyData";

const Katalog = () => {
  return (
    <section className=" py-20" id="katalog">
      <h2 className="text-3xl font-bold  mb-10 text-[#5A2B2B] pl-16 ">
        Katalog Do-sang
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 gap-y-12 py-16 px-16 w-[90vw] mx-auto rounded-[80px] bg-[#5A2B2B]">
        {products.map((product) => (
          <CatalogCard product={product} />
        ))}
      </div>
    </section>
  );
};

export default Katalog;
