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

  const onEnd = () => {
    setRow(null);
  };

  return {
    onEdit,
    onEnd,
    row,
  };
};

export default useActions;
