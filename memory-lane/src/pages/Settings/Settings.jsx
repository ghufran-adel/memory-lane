import "./Settings.scss";

import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import Loading from "../../component/Loading/Loading";

import Addprofile from "../../component/Addprofile/Addprofile";
import DeleteModal from "../../component/DeleteModal/DeleteModal";

import EditProfile from "../../component/EditProfile/EditProfile";

function Settings() {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [failedAuth, setFailedAuth] = useState(false);

  const getProfiles = async () => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProfiles(response.data);
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
  function parseDate(date) {
    // Parse the date string
    const parsedDate = new Date(date);

    // Extract year, month, and day
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();

    // Format the date as YYYY-MM-DD
    const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
    return formattedDate;
  }

  return (
    <main className="setting">
      {/* add new profile */}
      <Addprofile setProfiles={setProfiles} profiles={profiles} />

      {/* list of profiles  */}

      {profiles
        .slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) //to order according to the create date
        .map((profile) => {
          return (
            <div className="profile-card" key={profile.id}>
              <div className="profile-card__media">
                <div
                  className="profile-card__image"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_BASE_URL}${profile.avatar_url})`,
                  }}
                ></div>
              </div>
              <div className="profile-card__details">
                <h4 className="profile-card__title">{profile.baby_name}</h4>
                <div className="profile-card__date">
                  <LiaBirthdayCakeSolid className="profile-card__icon" />
                  <time dateTime={parseDate(profile.baby_birthday)}>
                    {parseDate(profile.baby_birthday)}
                  </time>
                </div>

                {/* edit profile */}
                <div className="profile-card__box">
                  <EditProfile
                    Profile={profile}
                    className="stting__delete-icon"
                  />

                  {/* delete profile */}
                  <DeleteModal
                    className="setting__delete-icon"
                    Item={"profile"}
                    itemId={profile.id}
                    list={profiles}
                    UpdateState={setProfiles}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </main>
  );
}

export default Settings;
