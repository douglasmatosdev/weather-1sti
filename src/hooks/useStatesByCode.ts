import { getStates } from '@/services'
import { BRAZIL_SATATES } from '@/utils/constants'
import React from 'react'

export function useStatesByCode() {
    const [state, setState] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const get = React.useCallback(async () => {
        const statesCodes = await getStates()
        
        const allBrasilStatesCodes = BRAZIL_SATATES.reduce((acc, curr, idx) => {
            return {
                ...acc,
                ...statesCodes.filter(sc => sc.state === curr.acronym)
            }
        })
        
        setState(allBrasilStatesCodes)
    }, [])

    React.useEffect(() => {
        get()
        setLoading(false)
    }, [get])


    return {
        state,
        loading
    }
}