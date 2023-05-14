import React from 'react'

type WeatherMock = {
    city: string
    min: number
    max: number
}
interface RandomListProps {
    data: WeatherMock[]
}

export const RandomList = ({ data }: RandomListProps) => {
    return (
        <ul className="w-full overflow-hidden p-4">
            <li className="mb-4 grid grid-cols-7 gap-x-3">
                <span className="font-normal">Min</span>
                <span className="font-normal">Max</span>
                <span>{""}</span>
            </li>
            {data.map((e) => {
                return (
                    <li
                        className="grid grid-cols-7 gap-x-3 gap-y-6"
                        key={e.city}
                    >
                        <span className="mb-4 whitespace-nowrap text-base font-bold">{e.min}°</span>
                        <span className="mb-4 whitespace-nowrap text-base font-bold">{e.max}°</span>
                        <span className="mb-4 whitespace-nowrap text-base font-bold">{e.city}</span>
                    </li>
                );
            })}
        </ul>
    )
}