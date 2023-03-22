import React from "react";
import Button from "./Button";

const Catalog = ({ items }) => {
  return (
    <div className="flex flex-wrap items-center justify-around gap-6 w-full mx-auto my-10">
      {items?.map((item) => (
        <div className="w-full lg:w-[45%] rounded-md shadow px-3 py-5 border relative" key={item.id}>
          <div>
            <p className="overflow-clip font-semibold mb-1">{item.full_name}</p>
            <p className="overflow-clip text-sm mb-1">{item.email}</p>
            <p className="overflow-clip text-sm mb-1">{item.phone}</p>
            <div className="absolute right-0 bottom-0 flex justify-end">
                <Button to={`catalogo/${item.id}`} className="text-xs p-2">Ver más</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
