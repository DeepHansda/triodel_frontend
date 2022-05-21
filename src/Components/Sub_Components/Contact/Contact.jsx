import React, { useState } from "react";
import "./contact.css";
import {Snackbar,Alert,Fade, CircularProgress} from "@mui/material";

import { useDispatch } from "react-redux";
import { createContact } from "../../../Redux/Actions/contactAction";
function Contact() {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dis,setDis] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [pro,setPro] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      fullName: fullName,
      email: email,
      contactNumber: contactNumber,
      message: message,
    };
    setPro(true)
    dispatch(createContact(data)).then((res) => {
      if(res){
        setOpen(true);
        setPro(false);
        if(res.success==1){
          setDis(true);
        }
        else(
          setDis(false)
        )
      }
    });
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };




  return (
    <>
    <Snackbar  TransitionComponent={Fade} open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top' , horizontal: 'right' }}>
        <Alert  variant="filled" onClose={handleClose} severity={dis ? "success": "error"} sx={{ width: '100%' }}>
          {dis ? "Message Sent !" : "Message Failed !"}
        </Alert>
      </Snackbar>
    <div className="contact" id="contactUs">
      <div className="contact-title">
        <h2>contact us</h2>
        <p>
          We offer professional and affordable solutions for all your website
          design, mobile app development, corporate branding and digital
          marketing requirements. Let us know what you need or leave us a
          message with your contact details and we will get back to you soon.
        </p>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="form-body">
            <div className="col-two-input">
              <input
                type="text"
                placeholder="Full Name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="col-one-input">
              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-one-input">
              <input
                type="number"
                placeholder="Phone Number *"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>

            <div className="col-one-input">
              <textarea
                className="textarea"
                type="text"
                placeholder="Message *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className="form-buttons">
            <div className="submit-button">
              <button type="submit">submit</button>
            </div>
            <div className="form-button-container">
    {pro && <CircularProgress color="success" size="30px"/>}

            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  );
}

export default Contact;
