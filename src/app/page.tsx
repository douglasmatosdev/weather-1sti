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

  const handleSearch = (term: string): void => {
    if (term) {
      setDisplayCard(true)
      getCityByName(term)
    }
  }
  const getCityByName = (name: string): void => {
    const response = api.getByName(name)
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
          displayCard && data ? <CardWeather handler={setDisplayCard} data={mountCardValues(data)} /> : null
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
    </main>
  );
}


const d = {
  "coord": {
    "lon": -43.3117,
    "lat": -22.7856
  },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "nuvens dispersas",
      "icon": "03n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 22.23,
    "feels_like": 22.47,
    "temp_min": 21.94,
    "temp_max": 23.26,
    "pressure": 1019,
    "humidity": 75
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.14,
    "deg": 150
  },
  "clouds": {
    "all": 40
  },
  "dt": 1684103068,
  "sys": {
    "type": 1,
    "id": 8376,
    "country": "BR",
    "sunrise": 1684055898,
    "sunset": 1684095661
  },
  "timezone": -10800,
  "id": 3464374,
  "name": "Duque de Caxias",
  "cod": 200
}