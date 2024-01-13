'use client'

import {useState, FormEvent} from 'react'
import { useRouter } from 'next/router';

import {axios} from '@/helpers';

export default function Page() {

    const [name, setName] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.post("/vehicles", {
                name: name
            })

            if (response.status === 200) {
                // redirect to list view
                router.push('/vehicles')
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
                <input type="text" className="border"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <button type="submit" className="" >Save</button>
            </form>
        </div>
    )
}