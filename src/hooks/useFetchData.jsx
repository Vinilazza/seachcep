import { useState, useEffect} from 'react'
import { useFetch} from 'react-fetch-hook'

export const useFetchData = (cep) => {

    const url = `viacep.com.br/ws/${cep}/json/`

    const { results } = useFetch(url);

    return {results}
}