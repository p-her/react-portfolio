
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div>
         <nav className='nav-bar'>
            <Link className={`nav-link `}  to="/about" >About Me</Link>
            <Link className={`nav-link `}  to="/profile">Profile</Link>
            <Link className={`nav-link `}  to="/contact">Contact</Link>
            <Link className={`nav-link `}  to="/resume">Resume</Link>
              

        </nav>
    </div>
  )
}

export default Navbar