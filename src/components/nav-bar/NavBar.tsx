// import { CgMenu } from "react-icons/fa"
import "../../styles/navbar.css"
import {Link} from "react-router-dom"

interface BTypes {
    id: number
    name: string
    to: string
}

function NavBar() {
    let buttons: BTypes[] = [
        {
            id: 1,
            name: "Bosh sahifa",
            to: "/"
        },
        {
            id: 2,
            name: "Foydalanuvchilar",
            to: "/users"
        },
        {
            id: 3,
            name: "Maqolalar",
            to: "/posts"

        }
    ]
    let button: HTMLElement | any = []

    buttons.forEach(btn => {
        button.push(<div className="buttons" key={btn.id}>{btn.name}</div>)
    })

    return (
        <div className="parent">
            <div className="child-1">
                Dashboard
            </div>

            <div className="child-2">
                {button}
            </div>
        </div>
    )
}

export default NavBar