import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import useActions from "../hooks/useActions";
import useFetch from "../hooks/useFetch";

const Layout = () => {
  const { row, onEdit } = useActions();
  const { catalog, totalPages, handlePageClick, getCatalog, onDelete} = useFetch();
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 flex flex-col lg:flex-row">
        <Form updateCatalog={getCatalog} row={row} isUpdate={row !== null} />
        <List
          catalog={catalog}
          handlePageClick={handlePageClick}
          totalPages={totalPages}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
      <ToastContainer autoClose={4000} />
    </div>
  );
};

export default Layout;
