import { useState, useEffect, useLayoutEffect } from "react"
import { url, token} from "../constant/constants"
import axios from "axios"

const useRequestData = (endpoint) => {
    let [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`${url}${endpoint}`)
        .then((res) => setData(res.data))
        .catch((err) => alert(err.response.data.message))
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    return data
}

export default useRequestData