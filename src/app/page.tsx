'use client'
import React from 'react'
import { InputText } from "@/components/InputText";
import { RandomList } from '@/components/RandomList';
import { mockData } from '@/utils';
import { CardWeather } from '@/components/CardWeather';
import api from '@/services/api';
import { mountCardValues } from '@/utils/mountCardValues';

export default function Home() {
  const [data, setData] = React.useState<ResponseConsult | null>(null)
  const [displayCard, setDisplayCard] = React.useState(false)

  const handleCloseOrOpenCard = (openOrClose: boolean): void => {
    setDisplayCard(openOrClose)
  }

  const handleOnSearch = (term: string): void => {
    if (term) {
      setDisplayCard(true)
      getCityByName(term)
    } else {

    }
  }
  const getCityByName = (name: string): void => {
    api.getByName(name)
      .then(res => res.cod == '200' && setData(res))
  }

  return (
    <main className="w-full flex flex-col mx-auto p-0 m-0">
      <div className="w-full max-w-screen-sm mx-auto flex flex-col items-center md:px-6 pb-8 justify-center border-b border-[#FFE7C7]">
        <div className='w-full p-2 flex items-center'>
          <h1 className={`inline-block text-white ml-6 md:ml-0 md:mb-4 whitespace-wrap text-${displayCard ? 2 : 6}xl sm:text-6xl whitespace-wrap font-bold leading-[64px]`}>
            Previsão do tempo
          </h1>
        </div>

        {
          displayCard && data ? <CardWeather handler={handleCloseOrOpenCard} data={mountCardValues(data)} /> : null
        }
        <div className="sm:w-full w-[90%] max-w-xl mt-4 md:mt-12flex justify-center">
          <InputText
            className="inline-block w-full"
            placeholder="Insira aqui o nome da cidade "
            name={"input-search"}
            handleOnSearch={handleOnSearch}
          />
        </div>
      </div>

      <div className="w-full flex flex-col px-6 py-10 items-start justify-center max-w-screen-sm mx-auto">
        <h1 className="ml-4 md:ml-0 inline-block text-white text-4xl md:text-5xl font-bold leading-[64px]">
          Capitais
        </h1>
        <RandomList data={mockData} />
      </div>
    </main>
  );
}
