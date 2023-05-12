import React from 'react'

interface WeekForecastProps {
    data: any[]
}

export const WeekForecast = ({ data }: WeekForecastProps) => {
    return (
        <ul className='flex justify-between'>
            {data.map((forecast, i) => {
                return (
                    <li
                        key={forecast.day}
                        className={`last:hidden sm:last:flex flex flex-col items-center sm:flex`}
                    >
                        <span className='font-bold text-lg text-[#444]'>{forecast.day}</span>
                        <span className='font-semibold text-sm text-[var(--bg)]'>{forecast.min}°{' '}{forecast.max}°</span>
                    </li>
                )
            })}
        </ul>
    )
}