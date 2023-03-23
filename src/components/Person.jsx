import React from "react";
import { useParams } from "react-router-dom";
import usePerson from "../hooks/usePerson";
import Loader from "./Loader";
import Box from "./Box";
import Title from "./Title";
import Flex from "./Flex";
import Button from "./Button";
import usePersonForm from "../hooks/useForm";
import Header from "./Header";

const Person = () => {
  const { id } = useParams();
  const { person } = usePerson({ id });
  const birthDate = new Date(person.birthdate).toLocaleDateString('es-ES', {month: 'long', day: '2-digit'})
  return (
    <Box className="order-last w-full mx-auto lg:w-3/5 mt-5 lg:mt-20 relative">
      <Header />
      <Title className="my-5" title={`Datos del usuario (${id})`} />
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
                { birthDate } | {person.age} años
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
            <div className="absolute m-4 bottom-10 right-20">
              <Button isAnimated className="rounded-full p-2" to="/">Volver</Button>
            </div>
          </>
        )}
      </div>
    </Box>
  );
};

export default Person;
