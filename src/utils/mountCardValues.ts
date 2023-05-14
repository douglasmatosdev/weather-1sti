export const mountCardValues = (data: ResponseConsult): CardValues => {
    const { main, name, wind, weather } = data

    return {
        name: name,
        wind: wind.speed,
        temp: main.temp,
        temp_min: main.temp_min,
        temp_max: main.temp_max,
        feels_like: main.feels_like,
        humidity: main.humidity,
        weather: weather[0].description
    }
}
