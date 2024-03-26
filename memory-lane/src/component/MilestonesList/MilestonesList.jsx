import './MilestonesList.scss';

import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Loading from "../../component/Loading/Loading";
import MilestonCard from "../MilestonCard/MilestonCard";

function MilestonesList({ profileId }) {
  const [milestones, setMilestones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [failedAuth, setFailedAuth] = useState(false);

  console.log(profileId);
  const navigate = useNavigate();

  const getMilestones = async () => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.get(
        `http://localhost:8080/api/milstones/${profileId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMilestones(response.data);
    } catch (error) {
      console.error(error);
      setFailedAuth(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getMilestones();
  }, [profileId]);

  if (failedAuth) {
    navigate("/login");
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }
  console.log(milestones);
  return (
    <div>
      <section className="milestones">
        {milestones.map((Milestone) => (
          <Link to={`/Milestones/${Milestone.id}`} id={Milestone.id} key={Milestone.id} className="milestone__item">
            <MilestonCard
              title={Milestone.title}
              description={Milestone.description}
              media={Milestone.media}
              date={Milestone.date}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default MilestonesList;
