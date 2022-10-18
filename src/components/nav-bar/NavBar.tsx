import {useNavigate} from "react-router-dom"
import "../../styles/navbar.css"

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
        button.push(<div className="buttons" key={btn.id} onClick={() => goPage(btn)}>{btn.name}</div>)
    })

    let navigate = useNavigate()

    function goPage(data: BTypes) {    
        navigate(data.to)
    }

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