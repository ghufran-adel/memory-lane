import {  NavLink } from "react-router-dom";
import "./Profiles.scss";

function Profiles({ profiles }) {
  return (
    <section className="profiles">
      {profiles.map((profile) => (
        <NavLink className=" profiles__link" to={`/${profile.id}`} key={profile.id}>
            <div
                className=" profiles__avtar"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_BASE_URL}${profile.avatar_url})`,
                }}
              ></div>
          
  
        </NavLink>
      ))}
    </section>
  );
}

export default Profiles;
