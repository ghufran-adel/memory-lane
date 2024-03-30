import "./Footer.scss";
import { NavLink, useParams } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  const { profileId } = useParams();
  return (
    <footer className="footer">
      <NavLink to="/contact-us" className="footer__link">
        <MdOutlineMailOutline className=" footer__icon" />
      </NavLink>
      <NavLink to="/" className="footer__link">
        <BiHome className=" footer__icon " />
      </NavLink>
      {profileId && (
        <NavLink to={`${profileId}/milestones`} className="footer__link">
          <IoAddCircleOutline className=" footer__icon footer__icon--add" />
        </NavLink>
      )}

      <NavLink to="/settings" className="footer__link">
        <IoSettingsOutline className=" footer__icon" />
      </NavLink>
      <NavLink to="/charts" className="footer__link">
        <FaChartLine className=" footer__icon--chart" />
      </NavLink>
    </footer>
  );
}

export default Footer;
