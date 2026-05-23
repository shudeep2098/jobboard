import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/jobs">
                JobBoard
            </Link>
        </nav>
    )
}

export default Navbar