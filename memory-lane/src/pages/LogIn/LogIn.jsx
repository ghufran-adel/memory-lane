import "./LogIn.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      sessionStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      navigate("/Home");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <>
      <main>
        <img
          className="logIn__image"
          src={`http://localhost:8080/images/curve.png`}
          alt="baby"
        />
        <div className="logIn__box">
          <h1 className="logIn__header">Welcome to Memory Lane,</h1>
          <h2 className="logIn__subheader">where every moment matters.</h2>
          <p className="logIn__text">
            Join us to celebrate the joy of watching your baby grow. Every
            smile, every giggle, and every milestone achieved is a cherished
            moment.
          </p>
        </div>
        <form className="logIn__form" onSubmit={handleSubmit}>
          <label className="logIn__label">Email</label>
          <input
            type="email"
            className="logIn__input"
            placeholder="your email"
            name="email"
          />
          <label className="logIn__label">Password</label>
          <input
            type="password"
            className="logIn__input"
            placeholder="password"
            name="password"
          />
          {error && <div className="logIn__message">{error.error}</div>}
          <button className="logIn__btn" type="submit">
            LOG IN
          </button>

          <p className="logIn__span">
            DO NOT have an account?
            <Link to="/signup" className="logIn__link">
              {" "}
              SIGN UP{" "}
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}

export default LogIn;
