import { useState } from "react";

const useActions = () => {
  const [row, setRow] = useState(null);

  const onEdit = (person) => {
    const payload = {
      fullName: person.full_name,
      jobTitle: person.job_title,
      ...person,
    };
    setRow(payload);
  };

  return {
    onEdit,
    row,
  };
};

export default useActions;
