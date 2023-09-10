import {useEffect, useState} from 'react'
import { baseUrl } from '../utils/constants'
import { handleResponse } from '../utils/handleResponse'

export const useFetch = (url, options) => {
    const newUrl = new URL(`${baseUrl}${url}`)
    const [state, setState] = useState({
        data:null,
        isLoading:true,
        error:null
    })
 
    useEffect (() => {
        if(!url) {
            return 
        }


        setState( )

        fetch(newUrl, {
            method: 'GET',
            ...options,
        }).then(handleResponse)
        .then(data => setState({
            data:data,
            isLoading:false,
            error:null
        }))
        .catch(error => 
            setState ({
                data:null,
                isLoading: false,
                error,
            }))
    
    }, [url])
    
}
