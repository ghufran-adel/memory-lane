import React, { useState } from "react";
import axios from "axios";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

function AddMilestone() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    media: [],
    address: "ADDRESS",
    latitude: -118.243700,
    longitude: 34.052200,
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      media: event.target.files,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = sessionStorage.getItem("token");

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("latitude", formData.latitude);
    formDataToSend.append("longitude", formData.longitude);
    formDataToSend.append("description", formData.description);
    for (let i = 0; i < formData.media.length; i++) {
      formDataToSend.append("media", formData.media[i]);
    }

    try {
      const response = await axios.post("http://localhost:8080/api/milstones/1", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
           "Authorization": `Bearer ${token}`
        },
      });
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error submitting milestone:", error);
    }
  };

 



  return (
    <div>
      <h2>Submit Milestone</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="date">Date:</label>
        <br />
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="images">Images:</label>
        <br />
        <input
          type="file"
          id="images"
          onChange={handleImageChange}
          accept="image/*"
          multiple
        />
        <br />
        <br />

        <label htmlFor="description">Description:</label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMilestone;
