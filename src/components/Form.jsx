import React from "react";
import Input from "./Input";
import Flex from "./Flex";
import Title from "./Title";
import Box from "./Box";
import Button from "./Button";
import useForm from "../hooks/useForm";

const Form = ({ onEnd, isUpdate = false, row = null, updateCatalog = () => {} }) => {
  const { onSubmit, handleSubmit, control, errors } = useForm({
    row,
    isUpdate,
    updateCatalog,
    onEnd,
  });
  return (
    <Box className="w-full lg:w-2/5 lg:mb-10">
      <Title title="Ingrese un registro" />
      <div className="bg-white shadow-md rounded-lg py-10 px-5 mx-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Nombre completo"
            name="fullName"
            control={control}
          />
          <Input
            type="email"
            name="email"
            control={control}
            placeholder="Correo"
          />
          <Flex>
            <Input
              name="age"
              control={control}
              type="number"
              placeholder="Edad"
            />
            <Input
              name="phone"
              control={control}
              type="phone"
              placeholder="Número de teléfono"
            />
            <Input
              name="birthdate"
              control={control}
              type="date"
              placeholder="Cumpleaños"
            />
          </Flex>
          <Flex>
            <Input name="jobTitle" control={control} placeholder="Puesto" />
            <Input name="company" control={control} placeholder="Compañía" />
          </Flex>
          <Input name="address" control={control} placeholder="Dirección" />
          <Input name="country" control={control} placeholder="País" />
          <Button>Enviar</Button>
        </form>
      </div>
    </Box>
  );
};

export default Form;
