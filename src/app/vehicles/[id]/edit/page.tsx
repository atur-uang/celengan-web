'use client'

import { axios } from "@/helpers"
import Vehicle from "@/types/vehicle"
import {useRouter} from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

export default function Page({params}: {params: {id: string}}) {

    const [vehicle, setVehicle] = useState<Vehicle|null>(null)
    const [name, setName] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(`/vehicles/${params.id}`)
                if (response.status === 200) {
                    console.log(response.data)
                    setVehicle(response.data)
                    setName(response.data.name)
                } else {
                    //
                }
            } catch (error) {

            }
        }

        fetchDetail()
    }, [params])
    
    const handleSubmit =  async (e: FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.put(`/vehicles/${vehicle?.id}`, {
                name: name
            })

            if (response.status === 200) {
                // redirect to list view
                router.push(`/vehicles/${vehicle?.id}`)
            } else {
                // show toast or popup
            }
        } catch (error) {
            // show toast or popup

            console.log(error)
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="border" value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="" >Update</button>
            </form>
        </div>
    )
}