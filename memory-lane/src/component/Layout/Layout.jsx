import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";
import { Outlet } from "react-router";


const Layout = () => {

  return (
    <div className="layout">
      <Header/>
      <Outlet
      />
      <Footer />
    </div>
  );
};

export default Layout;
