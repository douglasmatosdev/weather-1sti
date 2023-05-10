import { InputText } from "@/components/InputText";
import { data } from "autoprefixer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="full flex flex-col">
      <div className="w-full flex flex-col px-6 py-10 items-start justify-center border-b border-white">
        <h1 className="inline-block text-white text-5xl font-bold leading-[64px]">
          Previsão do tempo
        </h1>

        <div className="mt-12">
          <InputText
            className="inline-block w-full"
            placeholder="Insira aqui o nome da cidade "
            value=""
            name={""}
          />
        </div>
      </div>
      <div className="w-full flex flex-col px-6 py-10 items-start justify-center ">
        <h1 className="inline-block text-white text-5xl font-bold leading-[64px]">
          Capitais
        </h1>
        <ul className="w-[350px]">
          <li className="grid grid-cols-3 gap-0">
            <span className="font-normal">Min</span>
            <span className="font-normal">Max</span>
            <span>{""}</span>
          </li>
          {mockData.map((e) => {
            return (
              <li
                className="grid grid-cols-3 gap-0"
                key={e.name}
               >
                <span className="text-base font-bold">{e.min}°</span>
                <span className="text-base font-bold">{e.max}°</span>
                <span className="text-base font-bold">{e.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

const mockData = [
  {
    min: 18,
    max: 27,
    name: "Rio de Janeiro",
  },
  {
    min: 14,
    max: 22,
    name: "São Paulo",
  },
  {
    min: 21,
    max: 32,
    name: "elo Horizonte",
  },
  {
    min: 4,
    max: 23,
    name: "Brasília",
  },
  {
    min: 7,
    max: 45,
    name: "Belém",
  },
  {
    min: 18,
    max: 27,
    name: "Salvador",
  },
  {
    min: 18,
    max: 27,
    name: "Curitiba",
  },
  {
    min: 18,
    max: 27,
    name: "Fortaleza",
  },
  {
    min: 18,
    max: 27,
    name: "Manaus",
  },
  {
    min: 18,
    max: 27,
    name: "João Pessoa",
  },
];
