import { useEffect, useState } from "react";
import { client } from "../utils/axios";

const usePerson = ({ id }) => {
  const [person, setPerson] = useState({});

  const getPerson = async () => {
    if (!id) return
    const { data } = await client.get(`/${id}`);
    setPerson(data);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return {
    person
  };
};

export default usePerson;
