import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdDeleteOutline } from "react-icons/md";
import './DeleteModal.scss' ;

import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function DeleteModal({Item ,itemId , list ,UpdateState ,Id}) {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 // handle delete button
 const handleDelete = async (event) => {
    event.preventDefault();
    const token = sessionStorage.getItem("token");

    try {
    
        if (Item === 'profile'){
          const response = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}api/${Item}/${itemId}`,
            {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
        const filterd=(
          list.filter(
            (item) => item.id !== itemId
          ));
        UpdateState(filterd)
        setOpen(false);
      }
         if(Item === 'milstones'){
          const response = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}api/${Item}/${itemId}/${Id}`,
            {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            setOpen(false);
          navigate('/')
        }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <React.Fragment>
      <button className='delete-icon' onClick={handleClickOpen}>
      <MdDeleteOutline />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Would you like to delete this ${Item}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
{`If you delete this ${Item} ,there is no way to get data back`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCLE</Button>
          <Button onClick={handleDelete} autoFocus>
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}