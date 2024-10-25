import { NavLink } from "react-router-dom"

function Sidebar(){
    return (
        <>
            <aside className="sidebar">

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            </aside>

        </>
    )
}
export default Sidebar