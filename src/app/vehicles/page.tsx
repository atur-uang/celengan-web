import Link from 'next/link'

export default function Page() {
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
                    <tr>
                        <td>
                            <Link href="/vehicles/123">Mobil</Link>
                        </td>
                        <td>
                            <button type="button">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="/vehicles/556">Motor</Link>
                        </td>
                        <td>
                            <button type="button">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}