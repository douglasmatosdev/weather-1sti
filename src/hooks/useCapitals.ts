import api from '@/services/api';
import { BRAZIL_SATATES } from '@/utils/constants';
import { randomRangeNumbers } from '@/utils/randomRangeNumbers';
import React from 'react'

interface UseCapitals {
    capitals: CapitalMinMax[]
    loading: boolean
}

export function useCapitals(): UseCapitals {
    const [capitals, setCapitals] = React.useState<CapitalMinMax[]>([])
    const [loading, setLoading] = React.useState(true)

    const getCapitals = React.useCallback(async () => {
        const randomCapitalsNumbers = randomRangeNumbers(0, BRAZIL_SATATES.length - 1, 10)
        const tempListCapitalMinMax: CapitalMinMax[] = []

        for (const index of randomCapitalsNumbers) {
            const cityName = BRAZIL_SATATES[index].estado
            await api.getByName(cityName).then(res => {
                if (res.cod == '200') {
                    tempListCapitalMinMax.push({
                        city: res.name,
                        min: res.main.temp_min,
                        max: res.main.temp_max
                    })
                }
            })

        }
        setCapitals(tempListCapitalMinMax)
        setLoading(false)
    }, [])

    React.useEffect(() => {
        if (capitals.length > 0) {
            setInterval(() => {
                getCapitals()
            }, 1000 * 60)
        } else {
            getCapitals()
        }
    }, [])

    return {
        capitals,
        loading
    }
}