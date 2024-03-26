import "./Home.scss";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../component/Header/Header";
import Profiles from "../../component/Profiles/Profiles";
import Loading from "../../component/Loading/Loading";
import LogIn from "../LogIn/LogIn";
import MilestonesList from "../../component/MilestonesList/MilestonesList";
import Footer from "../../component/Footer/Footer";

function DashBoard() {
  const [profiles, setProfiles] = useState([]);
  const [profileId, setProfileId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [failedAuth, setFailedAuth] = useState(false);

  const navigate = useNavigate();

  const getProfiles = async () => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:8080/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.length === 0) {
        // No profiles found, navigate to Add profile
        navigate("/profiles");
      } else {
        setProfiles(response.data);
        //   set the frist profile as the defult one
        setProfileId(response.data[0].id);
      }
    } catch (error) {
      console.error(error);
      setFailedAuth(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getProfiles();
  }, []);

  if (failedAuth) {
    navigate("/login");
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Header setProfiles={setProfiles} setFailedAuth={setFailedAuth} />
      <Profiles profiles={profiles} setProfileId={setProfileId} />
      <MilestonesList profileId={profileId} />
      <Footer />
    </div>
  );
}

export default DashBoard;
