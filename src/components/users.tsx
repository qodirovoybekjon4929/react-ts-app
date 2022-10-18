import "../styles/users.css"
interface UTypes {
    id: number
    fullname: string
}

function users(data: any) {
    let users: UTypes[] = data.users
    let userComponent: any = []

    users.map(user => userComponent.push(<div key={user.id} className='user'><div className="userData"> ID: {user.id} <div className="delete" onClick={() => data.deleteUser(user.id)}>x</div></div></div>))

    return (
        <div className="parent-card">
            {userComponent}
        </div>
    )
}

export default users