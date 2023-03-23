import React from "react";
import { useParams } from "react-router-dom";
import usePerson from "../hooks/usePerson";
import Loader from "./Loader";
import Box from "./Box";
import Title from "./Title";
import Flex from "./Flex";
import Button from "./Button";
import usePersonForm from "../hooks/useForm";

const Person = () => {
  const { id } = useParams();
  const { person, onEdit } = usePerson({ id });
  return (
    <Box className="order-last w-full lg:w-3/5 mt-5 lg:mt-0">
      <Title title={`Datos del usuario (${id})`} />
      <div className="bg-white shadow-md rounded-lg py-10 px-5 mx-5">
        {!person ? (
          <Loader />
        ) : (
          <>
            <Flex className="gap-4 mb-4 lg:mb-10" justify="start" isWrap>
              <div className="rounded-lg border shadow p-5 w-full mb-4 lg:mb-0 lg:w-[48%]">
                <p className="text-lg font-semibold">Nombre</p>
                <p className="text-md">{person.full_name}</p>
              </div>
              <div className="rounded-lg border shadow p-5 w-full mb-4 lg:mb-0 lg:w-[48%]">
                <p className="text-lg font-semibold">Cumpleaños</p>
                <p className="text-md">
                  {person.age} años | {person.birthdate}
                </p>
              </div>
              <div className="rounded-lg border shadow p-5 w-full mb-4 lg:mb-0 lg:w-[48%]">
                <p className="text-lg font-semibold">País / Región</p>
                <p className="text-md">
                  {person.country} | {person.address}
                </p>
              </div>
              <div className="rounded-lg border shadow p-5 w-full mb-4 lg:mb-0 lg:w-[48%]">
                <p className="text-lg font-semibold">Contacto</p>
                <p className="text-md">
                  {person.email} | {person.phone}
                </p>
              </div>
              <div className="rounded-lg border shadow p-5 w-full mb-4 lg:mb-0 lg:w-[48%]">
                <p className="text-lg font-semibold">Ocupación</p>
                <p className="text-md">
                  {person.job_title} | {person.company}
                </p>
              </div>
            </Flex>
            <Flex justify="end">
              <Button onClick={() => onEdit(person)}>Editar</Button>
              <Button className="bg-red-600">Eliminar</Button>
            </Flex>
          </>
        )}
      </div>
    </Box>
  );
};

export default Person;
