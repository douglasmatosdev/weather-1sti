declare type DayWeekMinMax = {
    min: number
    max: number
    city: string
}

declare type CapitalMinMax = {
    min: number
    max: number
    city: string
}

declare type StateCode = {
    id: number
    name: string
    state: string
    country: string
}

declare type CardValues = {
    name: string
    wind: number
    temp: number
    temp_min: number
    temp_max: number
    feels_like: number
    humidity: number
    weather: string
}