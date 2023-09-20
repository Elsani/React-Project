import { useEffect, useState } from "react";

export const useDebounce = (value, time= 2000) =>
{
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(value)
        }, time)
        return () => clearTimeout(timeout)
        },[value])

        return  debounce
    }

    //qikjo useDebaunce osht tek search e kemi vendos qe mas 2 minutave 
    //2000 mls, me qu request ne backend qe per mos me ekzekutu secilen
    // shkronje qe e shkruajm ne search per em ta gjet 
    //elsan  e ekzekutohet komplet elsan , e jo  e , l, s,a,n.