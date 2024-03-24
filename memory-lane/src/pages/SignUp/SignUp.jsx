import "./SignUp.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


function SignUp() {


  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/signup", {
        user_name: event.target.user_name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });

      setSuccess(true);
      setError(null);
      event.target.reset();
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    }
  }

  return (
    <>
      <main className="signUp">
        <div className="signUp__box">
          <img
            className="signUp__image"
            src={`http://localhost:8080/images/baby-crowling.png`}
            alt="baby"
          />
        </div>

        <form className="signUp__form" onSubmit={handleSubmit}>
          <h1 className="signUp__title">Create New Account</h1>
          <label className="signUp__label">User Name</label>
          <input
            type="text"
            className="signUp__input"
            placeholder="your name"
            name="user_name"
          />
          <label className="signUp__label">Email</label>
          <input
            type="email"
            className="signUp__input"
            placeholder="your email"
            name="email"
          />
          <label className="signUp__label">Password</label>
          <input
            type="password"
            className="signUp__input"
            placeholder="password"
            name="password"
          />
          {error && <div className="signUp__message">{error.message}</div>}
          <button className="signUp__btn" type="submit">
            SIGN UP
          </button>
        
          <p className="signUp__span">
            Already have an account?
            <span className="signUp__link"> SIGN IN </span>
          </p>
        </form>
      </main>
    </>
  );
}

export default SignUp;
