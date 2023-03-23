import React from "react";
import Box from "./Box";
import Title from "./Title";
import Loader from "./Loader";
import Catalog from "./Catalog";
import Pagination from "./Pagination";

const List = ({
  onEdit = () => {},
  onDelete = () => {},
  handlePageClick,
  totalPages,
  catalog,
}) => {
  return (
    <Box className="order-last w-full lg:w-3/5 mt-5 lg:mt-0">
      <Title title="Listado de personas" />
      <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-8 mx-5">
        {!catalog?.length ? (
          <Loader />
        ) : (
          <div>
            <Catalog onDelete={onDelete} onEdit={onEdit} items={catalog} />
            <Pagination onClick={handlePageClick} totalPages={totalPages} />
          </div>
        )}
      </div>
    </Box>
  );
};

export default List;
