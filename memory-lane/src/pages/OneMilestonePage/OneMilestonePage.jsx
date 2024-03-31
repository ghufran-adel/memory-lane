import "./OneMilestonePage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import ImageSlider from "../../component/ImageSlider/ImageSlider";
import Loading from "../../component/Loading/Loading";
import DeleteModal from "../../component/DeleteModal/DeleteModal";

// icons
import { MdLocationOn } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";

function OneMilestonPage() {
  // state to hold all the details of the milestone
  const [milestoneDetails, setMilestoneDetails] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [failedAuth, setFailedAuth] = useState(false);
  const toggleMap = () => {
    setShowMap(!showMap);
  };

  // add params to target one milestone
  const { profileId, milestoneId } = useParams();

  const getMilestoneDetails = async () => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/milstones/${profileId}/${milestoneId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMilestoneDetails(response.data);
    } catch (error) {
      console.error(error);
      setFailedAuth(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getMilestoneDetails();
  }, [profileId, milestoneId]);

  if (failedAuth) {
    return <Navigate to="/logIn" />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <main className="details">
        {/* title */}
        <h4 className="details__title">{milestoneDetails.title}</h4>

        {/* slider */}
        <ImageSlider
          images={milestoneDetails.media}
          title={milestoneDetails.title}
        />
        {/* delete */}
        <div className="details__box">
          <DeleteModal
            className="details__delete"
            Id={milestoneId}
            itemId={profileId}
            Item={"milstones"}
          />
          <MdOutlineModeEditOutline className="details__edit" />
        </div>
        {/* loaction */}
        <div className="details__loaction">
          <p
            onClick={toggleMap}
            className="details__text details__text--underline"
          >
            <MdLocationOn /> {milestoneDetails.address}
          </p>
          {showMap && (
            <iframe
              title="Location Map"
              frameBorder={0}
              src={`https://maps.google.com/maps?q=${milestoneDetails.latitude},${milestoneDetails.longitude}&hl=en&z=14&output=embed`}
            ></iframe>
          )}
        </div>
        {/* people in the photos */}
        <div>
          <p className="details__text details__text--ppl">
            <IoIosPeople />
            {milestoneDetails.people}
          </p>
        </div>
        {/* discription */}
        <div>
          <p className="details__text">
            <MdDescription /> {milestoneDetails.description}
          </p>
        </div>
      </main>
    </>
  );
}

export default OneMilestonPage;
