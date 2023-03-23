import { client } from "../utils/axios";
import { useForm } from "react-hook-form";
import { showToastError, showToastSuccess } from "../utils/toast";

const DEFAULT_VALUES = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  brithdate: "",
  jobTitle: "",
  company: "",
  address: "",
  country: "",
};

const usePersonForm = ({
  row,
  isUpdate = false,
  onEnd,
  updateCatalog = () => {},
}) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: row ?? DEFAULT_VALUES,
  });

  const onSubmit = async ({
    id,
    fullName: full_name,
    jobTitle: job_title,
    age,
    phone,
    email,
    birthdate,
    company,
    address,
    country,
  }) => {
    const payload = {
      id: id ?? null,
      full_name,
      job_title,
      age,
      phone,
      email,
      birthdate,
      company,
      address,
      country,
    };
    if (isUpdate) {
      try {
        const { status, data } = await client.patch(`/${payload.id}`, payload);
        if (status === 200) {
          onEnd();
          updateCatalog();
          showToastSuccess("Registro actualizado correctamente.");
        } else {
          showToastError("Ocurrió un error, intente nuevamente.");
        }
      } catch (error) {
        showToastError(error?.response?.data?.message);
      }
    } else {
      try {
        const { status } = await client.post("", payload);
        if (status === 201) {
          reset();
          updateCatalog();
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
    onSubmit,
  };
};

export default usePersonForm;
