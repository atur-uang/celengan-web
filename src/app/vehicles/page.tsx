'use client'

import { axios } from '@/helpers'
import Vehicle from '@/types/vehicle'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Page() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([])

    useEffect(() => {
        const fetchVehicles = async () => {
            try {

                const response = await axios.get('/vehicles')
                if (response.status === 200) {
                    console.log(response.data.data)
                    setVehicles(response.data.data)
                } else {
                    //
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchVehicles()
    }, [])

    return (
        <div>

            <Link href="/vehicles/create">Create</Link>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {vehicles.map((vehicle) => (
                        <tr key={vehicle.id}>
                            <td>
                                <Link href={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
                            </td>
                            <td>
                                <button type="button">Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>


        </div>
    )
}