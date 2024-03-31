import "./AddMilestone.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Navigate } from "react-router-dom";

import LocationInput from "../../component/LocationInput/LocationInput";
import { MdError } from "react-icons/md";

function AddMilestone() {
  const [failedAuth, setFailedAuth] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    media: [],
    description: "",
  });

  const [error, setError] = useState({}); //to validate form

  // states to store data comping from auto complete input
  const [location, setlocation] = useState("");
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);

  const { profileId } = useParams();

  const navigate = useNavigate();

  // to not show page when user is logged out
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("./logIn");
    }
  }, []);

  // handle formdata input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle images change
  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      media: event.target.files,
    });
  };

  // check form validation
  const isFormValid = () => {
    let isValid = true;
    const errors = {};

    if (!formData.title || formData.title === "") {
      errors.title = "This field is required";
      isValid = false;
    }

    if (!location || location === "") {
      errors.location = "This field is required";
      isValid = false;
    }

    if (!formData.date || formData.date === "") {
      errors.date = "This field is required";
      isValid = false;
    }

    if (!formData.description) {
      errors.description = "This field is required";
      isValid = false;
    }
    if (!formData.media || formData.media.length === 0) {
      errors.media = "This field is required";
      isValid = false;
    }

    // Update the error state
    setError(errors);

    return isValid;
  };

  // post request for new milstone
  const handleSubmit = async (event) => {
    event.preventDefault();
    isFormValid();

    const token = sessionStorage.getItem("token");

    // create form data to store files and values
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("address", location);
    formDataToSend.append("latitude", latitude);
    formDataToSend.append("longitude", longitude);
    formDataToSend.append("description", formData.description);
    for (let i = 0; i < formData.media.length; i++) {
      formDataToSend.append("media", formData.media[i]);
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/milstones/${profileId}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // redirect to home
      navigate("/");
    } catch (error) {
      console.error("Error submitting milestone:", error);
      setFailedAuth(true);
    }

    if (failedAuth) {
      return <Navigate to="/logIn" />;
    }
  };

  return (
    <main className="add">
      <h1 className="add__title">Capture New Memory</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <label className="add-form__label" htmlFor="title">
          Title
        </label>

        <input
          className="add-form__input"
          type="text"
          id="title"
          name="title"
          placeholder="title"
          value={formData.title}
          onChange={handleChange}
        />
        {error.title && (
          <p className="add-form__input--error">
            <MdError />
            {error.title}
          </p>
        )}

        <label
          className="add-form__label add-form__label--upload"
          htmlFor="images"
        >
          Upload
        </label>

        <input
          className="add-form__input add-form__input--file"
          type="file"
          id="images"
          onChange={handleImageChange}
          accept="image/*"
          multiple
        />
        {error.media && (
          <p className="add-form__input--error">
            <MdError />
            {error.media}
          </p>
        )}

        <label className="add-form__label" htmlFor="description">
          Description
        </label>
        <input
          className="add-form__input"
          type="text"
          id="description"
          name="description"
          placeholder="add more for this great moment"
          value={formData.description}
          onChange={handleChange}
        />
        {error.description && (
          <p className="add-form__input--error">
            <MdError />
            {error.description}
          </p>
        )}

        <label className="add-form__label" htmlFor="date">
          Date
        </label>
        <input
          className="add-form__input"
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {error.date && (
          <p className="add-form__input--error">
            <MdError />
            {error.date}
          </p>
        )}

        <label className="add-form__label" htmlFor="Location">
          Location
        </label>
        <LocationInput
          className="add-form__input"
          setlocation={setlocation}
          setlatitude={setlatitude}
          setlongitude={setlongitude}
          location={location}
        />
        {error.location && (
          <p className="add-form__input--error">
            <MdError />
            {error.location}
          </p>
        )}
        <button className="add-form__btn" type="submit">
          CREATE
        </button>
      </form>
    </main>
  );
}

export default AddMilestone;
