import "./Profiles.scss";
import { CgProfile } from "react-icons/cg";

function Profiles({ profiles, setProfileId }) {
  // update the profile id , according to the user click .
  const handleClick = (id) => {
    setProfileId(id);
  };

  return (
    <section className="profiles">
      {profiles.map((profile) => (
        <div
          id={profile.id}
          key={profile.id}
          className="profiles__item"
          onClick={() => handleClick(profile.id)}
        >
          <CgProfile className="profiles__avtar" />
          {/* <h4>{profile.baby_name}</h4> */}
        </div>
      ))}
    </section>
  );
}

export default Profiles;
