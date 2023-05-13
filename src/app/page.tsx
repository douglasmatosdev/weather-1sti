'use client'
import React from 'react'
import { InputText } from "@/components/InputText";
import { RandomList } from '@/components/RandomList';
import { mockData } from '@/utils';
import { CardWeather } from '@/components/CardWeather';
import { useStatesByCode } from '@/hooks/useStatesByCode';
import api from '@/services/api';

export default function Home() {
  const [data, setData] = React.useState<ResponseConsult | null>(null)
  const [displayCard, setDisplayCard] = React.useState(false)

  const handleSearch = (term: string): void => {
    if (term) {
      setDisplayCard(!displayCard)
      getCityByName(term)
    }
  }
  const getCityByName = (name: string): void => {
    const response = api.getByName(name)
      .then(res => res.cod == '200' && setData(res))
  }

  

  return (
    <main className="w-full flex flex-col mx-auto p-0 m-0">
      <div className="w-full max-w-screen-sm mx-auto flex flex-col items-center md:px-6 py-8 justify-center border-b border-[#FFE7C7]">
        <h1 className={`inline-block text-white ml-6 md:ml-0 md:mb-4 whitespace-wrap text-${displayCard ? 2 : 6}xl sm:text-6xl whitespace-wrap font-bold leading-[64px]`}>
          Previsão do tempo
        </h1>

        {
          displayCard ? <CardWeather handler={setDisplayCard} /> : null
        }
        <div className="sm:w-full w-[90%] max-w-xl mt-4 md:mt-12flex justify-center">
          <InputText
            className="inline-block w-full"
            placeholder="Insira aqui o nome da cidade "
            name={"input-search"}
            handler={handleSearch}
          />
        </div>
      </div>

      <div className="w-full flex flex-col px-6 py-10 items-start justify-center max-w-screen-sm mx-auto">
        <h1 className="ml-4 md:ml-0 inline-block text-white text-4xl md:text-5xl font-bold leading-[64px]">
          Capitais
        </h1>
        <RandomList data={mockData} />
      </div>

      <div>
        <pre>
          {
            data && JSON.stringify(data, null, 2)
          }
        </pre>
      </div>
    </main>
  );
}
