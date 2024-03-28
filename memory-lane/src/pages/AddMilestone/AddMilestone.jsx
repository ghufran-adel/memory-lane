import React, { useState } from "react";
import axios from "axios";
import LocationInput from "../../component/LocationInput/LocationInput";

function AddMilestone() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    media: [],
    description: "",
  });

  // states to store data comping from auto complete input
  const [location, setlocation] = useState("");
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        "http://localhost:8080/api/milstones/1",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      // clear form after submit
      setFormData("");
      setlocation("");
    } catch (error) {
      console.error("Error submitting milestone:", error);
    }
  };

  return (
    <div>
      <h2>Create New Milestone</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>

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
        <LocationInput
          setlocation={setlocation}
          setlatitude={setlatitude}
          setlongitude={setlongitude}
          location={location}
        />
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMilestone;
