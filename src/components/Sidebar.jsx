import { NavLink } from "react-router-dom"

function Sidebar(){
    return (
        <>
            <aside className="sidebar">

            <nav>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
            </nav>

            </aside>

        </>
    )
}
export default Sidebar