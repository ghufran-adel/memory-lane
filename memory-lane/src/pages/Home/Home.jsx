import "./Home.scss";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Profiles from "../../component/Profiles/Profiles";
import Loading from "../../component/Loading/Loading";

import MilestonesList from "../../component/MilestonesList/MilestonesList";


function DashBoard({profiles ,setProfiles , profileId ,setProfileId }) {

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
        navigate("/settings");
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
    return <Navigate to="/logIn" />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Profiles profiles={profiles} setProfileId={setProfileId} />
      <MilestonesList profileId={profileId} />
    </div>
  );
}

export default DashBoard;
