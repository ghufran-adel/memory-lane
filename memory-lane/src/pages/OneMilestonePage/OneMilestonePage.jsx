import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ImageSlider from '../../component/ImageSlider/ImageSlider';
import Loading from "../../component/Loading/Loading";

  

function OneMilestonPage() {
   // state to hold all the details of the milestone
 const [milestoneDetails, setMilestoneDetails] = useState(null);
 const [isLoading, setIsLoading] = useState(true);
 const [failedAuth, setFailedAuth] = useState(false);


// add params to target one milestone
const { profileId, milestoneId } = useParams();

 const navigate = useNavigate();

  const getMilestoneDetails = async () => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.get(
        `http://localhost:8080/api/milstones/${profileId}/${milestoneId}`,
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
  }, [profileId,milestoneId]);

  if (failedAuth) {
    navigate("/login");
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }
  console.log(milestoneDetails);







  return (
    <div>OneMilestonPage
      <ImageSlider images = {milestoneDetails.media} title={milestoneDetails.title}/>
    </div>
  )
}

export default OneMilestonPage