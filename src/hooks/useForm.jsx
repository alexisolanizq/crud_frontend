import { client } from "../utils/axios";
import { useForm } from "react-hook-form";
import { showToastError, showToastSuccess } from "../utils/toast";
import { useState } from "react";

const DEFAULT_VALUES = {};

const usePersonForm = ({ row = null, isUpdate = false }) => {
  const [editPerson, setEditPerson] = useState({});
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES,
  });

  const onSubmit = async (body) => {
    const payload = {
      full_name: body.fullName,
      job_title: body.jobTitle,
      ...body,
    };
    if (isUpdate) {
      const { status, data } = await client.patch("", payload);
      if (status === 200) {
        reset();
        showToastSuccess("Registro actualizado correctamente.");
      } else {
        showToastError("Ocurrió un error, intente nuevamente.");
      }
    } else {
      try {
        const { status, data } = await client.post("", payload);
        if (status === 201) {
          reset();
          showToastSuccess("Se realizo el registro correctamente.");
        } else {
          showToastError("Ocurrió un error, intente nuevamente.");
        }
      } catch (error) {
        showToastError(error?.response?.data?.message);
      }
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    editPerson,
    setEditPerson,
    onSubmit,
  };
};

export default usePersonForm;
