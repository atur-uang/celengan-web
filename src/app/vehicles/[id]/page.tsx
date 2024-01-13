'use client'

import { axios } from "@/helpers"
import Vehicle from "@/types/vehicle"
import { useEffect, useState } from "react"

export default function Page({params}: {params: {id: string}}) {

    const [vehicle, setVehicle] = useState<Vehicle>()

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(`/vehicles/${params.id}`)
                if (response.status === 200) {
                    console.log(response.data)
                    setVehicle(response.data)
                }
            } catch (error) {

            }
        }

        fetchDetail()
    }, [params])

    return (
        <div>
            Id: {params.id}
        </div>
    )
}