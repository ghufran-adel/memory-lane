import { Link } from "react-router-dom";
import "./Profiles.scss";
import { CgProfile } from "react-icons/cg";

function Profiles({ profiles }) {
  return (
    <section className="profiles">
      {profiles.map((profile) => (
        <Link to={`/${profile.id}`}>
          <div id={profile.id} key={profile.id} className="profiles__item">
            <CgProfile className="profiles__avtar" />
            {/* <h4>{profile.baby_name}</h4> */}
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Profiles;
