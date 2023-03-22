import { useEffect, useState } from "react";
import { client } from "../utils/axios";

const usePerson = ({ id }) => {
  const [person, setPerson] = useState({});
  const [row, setRow] = useState(null);

  const getPerson = async () => {
    const { data } = await client.get(`/${id}`);
    setPerson(data);
  };

  const onEdit = (data) => {
    setRow(data)
  }

  useEffect(() => {
    getPerson();
  }, []);

  return {
    person,
    onEdit,
    row
  };
};

export default usePerson;
