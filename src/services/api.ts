// const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
// const API_KEY = 'a66d13253dc39685dfaabd202f467c33'//process.env.NEXT_PUBLIC_TOKEN
// const AUTH = `appid=${API_KEY}`
const BR_SETUP = 'units=metric&lang=pt_br'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='
const API_KEY = 'db04f7f0492b01563ff78567693c5b79'
const AUTH = `appid=${API_KEY}`

const url = {
    byId: `${BASE_URL}weather?id=`,
    byGroupId: `${BASE_URL}group?id=`,
    byName: `${BASE_URL}weather?q=`,
    forecastByName: `${BASE_URL}forecast?q=`
}

const api = {
    getById: (id: number): Promise<ResponseConsult> => {
        return fetch(`${url.byId}${id}&${AUTH}&${BR_SETUP}`)
            .then(res => res && res.json())
    },
    getByGroupId: (groupId: number[]): Promise<ResponseConsultGroupForecast> => {
        return fetch(`${url.byGroupId}${groupId}&${AUTH}&${BR_SETUP}`)
            .then(res => res && res.json())
    },
    getByName: (name: string): Promise<ResponseConsult> => {
        return fetch(`${url.byName}${name}&${AUTH}&${BR_SETUP}`)
            .then(res => res && res.json())
    },
    getForecastByName: (name: string): Promise<ResponseConsultForecast> => {
        return fetch(`${url.forecastByName}${name}&${AUTH}&${BR_SETUP}`)
            .then(res => res && res.json())
    }
}

export default api
