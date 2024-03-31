import * as React from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import axios from "axios";
import { MdError } from "react-icons/md";
import "./EditProfile.scss";
import { MdOutlineModeEditOutline } from "react-icons/md";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function EditProfile({ setProfiles, profiles, Profile }) {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState({}); //to validate form
  const [failedAuth, setFailedAuth] = useState(false);

  const [formData, setFormData] = useState({
    baby_name: `${Profile.baby_name}`,
    baby_birthday: `${Profile.baby_birthday}`,
    image: `${Profile.avatar_url}`,
  });

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
      image: event.target.files[0],
    });
  };

  // check form validation
  const isFormValid = () => {
    let isValid = true;
    const errors = {};

    if (!formData.baby_name || formData.baby_name === "") {
      errors.baby_name = "This field is required";
      isValid = false;
    }

    if (!formData.baby_birthday || formData.baby_birthday === "") {
      errors.baby_birthday = "This field is required";
      isValid = false;
    }
    // Update the error state
    setError(errors);
    return isValid;
  };

  // patch request for  profile
  const handleSubmit = async (event) => {
    event.preventDefault();
    isFormValid();

    const token = sessionStorage.getItem("token");

    // create form data to store files and values
    const formDataToSend = new FormData();
    formDataToSend.append("baby_name", formData.baby_name);
    formDataToSend.append("baby_birthday", formData.baby_birthday);
    formDataToSend.append("image", formData.image);

    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}api/profile/${Profile.id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
      setFailedAuth(true);
    }

    if (failedAuth) {
      return <Navigate to="/logIn" />;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className="delete-icon" onClick={handleClickOpen}>
        <MdOutlineModeEditOutline />
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Edit Profile
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <form onSubmit={handleSubmit} className="profile-add-form">
            <label className="profile-add-form__label" htmlFor="baby_name">
              Baby Name
            </label>

            <input
              className="profile-add-form__input"
              type="text"
              id="baby_name"
              name="baby_name"
              placeholder="Name"
              value={formData.baby_name}
              onChange={handleChange}
            />
            {error.baby_name && (
              <p className="profile-add-form__input--error">
                <MdError />
                {error.baby_name}
              </p>
            )}

            <label
              className="profile-add-form__label profile-add-form__label--upload"
              htmlFor="image"
            >
              Upload Profile Picture
            </label>

            <input
              className="profile-add-form__input profile-add-form__input--file"
              type="file"
              id="image"
              onChange={handleImageChange}
              accept="image/*"
            />

            <label className="profile-add-form__label" htmlFor="baby_birthday">
              Due / Birth Date
            </label>
            <input
              className="profile-add-form__input"
              type="date"
              id="baby_birthday"
              name="baby_birthday"
              value={formData.baby_birthday}
              onChange={handleChange}
            />
            {error.baby_birthday && (
              <p className="profile-add-form__input--error">
                <MdError />
                {error.baby_birthday}
              </p>
            )}
            <button className="profile-add-form__btn" type="submit">
              SAVE
            </button>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
