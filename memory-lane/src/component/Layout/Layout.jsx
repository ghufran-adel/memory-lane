import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";
import { Outlet } from "react-router";


const Layout = ({setProfiles,setFailedAuth,profileId}) => {

  return (
    <div className="layout">
      <Header setProfiles={setProfiles} setFailedAuth={setFailedAuth} />
      <Outlet
      />
      <Footer profileId={profileId} />
    </div>
  );
};

export default Layout;
