import axios from "axios"
import { useEffect, useState } from "react"

export function Home() {

    const [response, setResponse] = useState("")

    useEffect(() => {
        axios.get("https://login-api-gabriel.herokuapp.com/project", {
            headers: {
                
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })

        .then((response) => {
            setResponse(response.data)
        })
    }, [])

    return (
        <>
            {response}
        </>
    )
}