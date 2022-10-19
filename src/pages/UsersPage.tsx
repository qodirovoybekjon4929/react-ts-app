import { useEffect, useState } from "react"
import Users from "../components/users"

interface UTypes {
    id: number
    fullname: string
}

function UsersPage() {
    let [usersData, setUsers] = useState<UTypes[]>([
        {
            id: 1,
            fullname: "some"
        },
        {
            id: 2,
            fullname: "some2"
        },
        {
            id: 3,
            fullname: "some3"
        }
    ])
    function deleteUser(id: number) {
        let users: UTypes[] = []
        usersData.map((user: UTypes) => {
            if(user.id != id) {
                users.push(user)
                setUsers(usersData = users)
            } else if(user.id == id && users.length < 1) {
                setUsers(usersData = [])
            }
        })
    }
    return (
        <div>
            <Users users={usersData} deleteUser={deleteUser} />
            {/* <div className="text-red-800">
                t-css
            </div> */}
        </div>
    )
}

export default UsersPage