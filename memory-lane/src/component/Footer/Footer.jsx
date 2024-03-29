
import './Footer.scss';
import { Link } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer({profileId}) {

    const isActive = (path) => {
        return window.location.pathname === path ? 'footer__active' : 'footer__link';
      };

  return (
    <footer className='footer'>
      <Link to="/contact-us" className={ isActive("/contact-us") } >
        <MdOutlineMailOutline className=' footer__icon' />
      </Link>
      <Link to="/" className={ isActive("/") }>
        <BiHome className=' footer__icon' />
      </Link>
      <Link to={`${profileId}/milestones`} className={ isActive("/milestones") } >
        <IoAddCircleOutline className=' footer__icon footer__icon--add'/>
      </Link>
      <Link to="/settings" className={ isActive("/settings") } >
        <IoSettingsOutline className=' footer__icon' />
      </Link>
      <Link to="/charts" className={ isActive("/charts") } >
        <FaChartLine className=' footer__icon--chart' />
      </Link>
    </footer>
  );
}

export default Footer;
