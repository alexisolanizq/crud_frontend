import { useEffect, useState } from "react";
import { client } from "../utils/axios";

const useFetch = () => {
  const [catalog, setCatalog] = useState([]);
  const [totalPages, setTotalPages] = useState(0)

  const getCatalog = async () => {
    const {data} = await client.get('')
    setTotalPages(Math.ceil( data.total / data.per_page))
    setCatalog(data.data)
  }

  useEffect(() => {
    getCatalog()
  }, []);

  const handlePageClick = async (current) => {
    const {data} = await client.get(`?page=${current.selected + 1}`)
    setCatalog(data.data)
  }

  return {
    catalog,
    getCatalog,
    setCatalog,
    totalPages,
    handlePageClick
  }
};

export default useFetch;
