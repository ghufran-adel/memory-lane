import './Header.scss';
import { MdLogout } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { NavLink ,useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className='header'>
      <nav className='nav'>
        {/* NavLink for Notifications */}
        <NavLink to="/notifications">
          <IoIosNotifications className='nav__notification' />
        </NavLink>
        {/* Icon for Logout */}
        <MdLogout className='nav__logout' onClick={logout} />
      </nav>
      <hr />
    </header>
  )
}

export default Header;
