import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import Profiles from "../../component/Profiles/Profiles";
import "./DashBoard.scss";
import Loading from "../../component/Loading/Loading";

function DashBoard() {
  const [profiles, setProfiles] = useState([]);
  const [ProfileId, setProfileId] = useState(null);
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
        // No profiles found, navigate to home
        navigate("/");
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
  console.log(ProfileId);

  if (failedAuth) {
    return (
      <main className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </main>
    );
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Header />
      <Profiles profiles={profiles} setProfileId={setProfileId} />
    </div>
  );
}

export default DashBoard;
