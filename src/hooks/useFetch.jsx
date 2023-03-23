import { useEffect, useState } from "react";
import { client } from "../utils/axios";
import { showToastError, showToastSuccess } from "../utils/toast";

const useFetch = () => {
  const [catalog, setCatalog] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const getCatalog = async () => {
    const { data } = await client.get("");
    setTotalPages(Math.ceil(data.total / data.per_page));
    setCatalog(data.data);
  };

  const onDelete = async (id) => {
    const { status } = await client.delete(`/${id}`);
    if (status !== 204) {
      showToastError("Ocurrió un error, intente nuevamente");
    }
    showToastSuccess("Elemento eliminado");
    getCatalog();
  };

  useEffect(() => {
    getCatalog();
  }, []);

  const handlePageClick = async (current) => {
    const { data } = await client.get(`?page=${current.selected + 1}`);
    setCatalog(data.data);
  };

  return {
    catalog,
    onDelete,
    getCatalog,
    setCatalog,
    totalPages,
    handlePageClick,
  };
};

export default useFetch;
