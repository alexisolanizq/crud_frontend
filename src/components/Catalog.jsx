import React from "react";
import Button from "./Button";
import Flex from "./Flex";

const Catalog = ({ items, onEdit, onDelete }) => (
  <div className="flex flex-wrap items-center justify-around gap-6 w-full mx-auto mt-5">
    {items?.map((person) => (
      <div
        className="w-full lg:w-[45%] rounded-md shadow px-3 py-5 border relative"
        key={person.id}
      >
        <div>
          <div className="mb-3">
            <p className="overflow-clip font-semibold mb-1">
              {person.full_name}
            </p>
            <Flex align="start" gap={false} isVertical>
              <p className="font-semibold">Correo</p>
              <p className="overflow-clip text-sm mb-1">{person.email}</p>
            </Flex>
            <Flex align="end" gap={false} isVertical>
              <p className="font-semibold">Teléfono</p>
              <p className="overflow-clip text-sm mb-1">{person.phone}</p>
            </Flex>
            <Flex align="start" gap={false} isVertical>
              <p className="font-semibold">Edad</p>
              <p className="overflow-clip text-sm mb-1">{person.age}</p>
            </Flex>
          </div>

          <Flex className="absolute right-0 bottom-0" gap={false} justify="end">
            <Button
              className="rounded-r-none text-xs"
              onClick={() => onEdit(person)}
            >
              Editar
            </Button>
            <Button className="rounded-none text-xs bg-cyan-600">
              Ver más
            </Button>
            <Button
              className="rounded-l-none text-xs bg-red-600"
              onClick={() => onDelete(person.id)}
            >
              Eliminar
            </Button>
          </Flex>
        </div>
      </div>
    ))}
  </div>
);

export default Catalog;
