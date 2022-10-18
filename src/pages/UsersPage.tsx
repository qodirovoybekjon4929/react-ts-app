import { useEffect, useState } from "react"
import Users from "../components/users"

interface UTypes {
    id: number
    fullname: string
}

function UsersPage() {
    const [usersData, setUsers] = useState([])
    return (
        <Users />
    )
}

export default UsersPage