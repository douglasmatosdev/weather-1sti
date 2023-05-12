import React from 'react'
import { WeekForecast } from '../WeekForecast'
import { mockWeekForecast } from '@/utils'
import { FaTimes } from 'react-icons/fa'

interface CardWeatherProps {
    handler: (value: boolean) => void
}

export const CardWeather = ({ handler }: CardWeatherProps) => {

    return (
        <div className='relative w-full h-auto bg-[#FFF4E4] px-8 py-4 max-w-xl after:content-[""] after:absolute after:w-full after:bg-[var(--bg-foreground)] after:h-[2px] after:-left-0 after:bottom-20'>
            <button
                title='Fechar card'
                className='absolute right-4 font-normal text-2xl text-[var(--bg-foreground)]'
                type='button'
                onClick={() => handler(false)}
                >
                <FaTimes />
            </button>
            <h2 className='text-[var(--color-card-text)] font-semibold text-xl' >Niterói, RJ - Brasil</h2>
            <h1 className='text-[var(--color-card-text)] text-4xl font-bold mt-4 mb-4'>20°C &nbsp;&nbsp; Nublado</h1>
            <div className='grid grid-cols-2 gap-4 mb-6 '>
                <div>
                    <span className='text-[var(--color-card-text)] inline-block'>{'v'} <strong>16°</strong></span>
                    <span className='text-[var(--color-card-text)] inline-block'>{'A'} <strong>25°</strong></span>
                </div>
                <span className='text-[var(--color-card-text)] inline-block'>Sensação <strong>19°</strong></span>
                <span className='text-[var(--color-card-text)] inline-block'>Vento <strong>18Km/h</strong></span>
                <span className='text-[var(--color-card-text)] inline-block'>Humiade <strong>89%</strong></span>
            </div>

            <div className='pt-4'>
                <WeekForecast data={mockWeekForecast} />
            </div>
        </div>
    )
}