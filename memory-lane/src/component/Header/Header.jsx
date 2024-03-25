import './Header.scss';
import { MdLogout } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
    <nav className='nav'>
        <NavLink >
        <IoIosNotifications className='nav__logout'/>
        </NavLink>
        <NavLink>
    <MdLogout className='nav__notification'/>  
    </NavLink>
    </nav>
    <hr></hr>
    </header>
  )
}

export default Header