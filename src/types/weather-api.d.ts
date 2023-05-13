declare type ResponseConsult = {
    base: string
    clouds: Clouds
    cod: string
    coord: Coord
    dt: number
    id: number
    main: Main
    name: string
    sys: Sys
    timezone: number
    visibility: number
    weather: Weather
    wind: Wind
}


declare type Clouds = {
    all: number
}

declare type Coord = {
    lat: number
    lon: number
}

declare type Main = {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
}

declare type Sys = {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
}

declare type Weather = {
    description: string
    icon: string
    id: number
    main: string
}[]

declare type Wind = {
    deg: number
    speed: number
}

type City = {
    coord: Coord
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
}


declare type ResponseConsultGroupForecast = {
    cnt: number
    list: ListForecast[]
}

declare type ListForecast = {
    clouds: Clouds
    dt: number
    dt_txt: string
    main: Main & { grnd_level: number; sea_level: number; temp_kf: number; }
    pop: number
    name: string
    sys: { prod: number }
    visibility: number
    weather: Weather
    wind: Wind & { gust: number }
}

declare type ResponseConsultForecast = {
    city: City
    cnt: number
    cod: string
    list: ListForecast[]
    massage: 0
}