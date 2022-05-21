import React, { useEffect,useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {createContact} from '../../../Redux/Actions/contactAction'
import {
  Paper,
  Box,
  Grid,
  Container,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
  Fade,
  CircularProgress,
} from "@mui/material";
import { ImLocation2, ImMail4, ImPhone } from "react-icons/im";
import { createUseStyles } from "react-jss";
import SocialMediaBar from "../../../UI/SocialMediaBar/SocialMediaBar";

const useStyles = createUseStyles({
  contactUs: {
    maxWidth: "1280px",
    height: "100vh",
    // margin: "60px auto",
    // padding: "370px 0",
  },
  contactUsGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  contactUsContainer: {
    paddinTop:'300px',

    //   width: "200px";
    maxWidth: "900px",
    margin: "0 auto",

    // backgroundColor: "blue",
  },
  contactUsFormContainer: {
    padding: "20px",
  },
  contactUsRightIcon: {
    fontSize: "30px",
    color: "#fff",
  },
  contactUsRightSocial: {
    padding: "10px",
    color: "#000",
    // backgroundColor:"#000"
  },
  contactUsFormButton:{
    display: "flex",
    alignItems: "center",
    // justifyContent:"center"
  }
});

function ContactUS({ SetOpenSideBar }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    SetOpenSideBar(false);
  }, []);

  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dis,setDis] = useState(false);
  const dispatch = useDispatch();
  const [pro,setPro] = useState(false);




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
        setPro(false)
        setOpen(true);
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






  return (<>
    <Snackbar  TransitionComponent={Fade} open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top' , horizontal: 'right' }}>
        <Alert  variant="filled" onClose={handleClose} severity={dis ? "success": "error"} sx={{ width: '100%' }}>
          {dis ? "Message Sent !" : "Message Failed !"}
        </Alert>
      </Snackbar>
    <Box className="contactUs" sx={{paddingTop:'100px'}}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "60px",
          fontFamily: "Poppins",
        }}
      >
        Contact Us
      </Typography>
      <Container >
        <Paper className={classes.contactUsContainer} elevation={3}>
          <Grid container className={classes.contactUsGrid}>
            <Grid item xs={12} md={6}>
              <Container
                className={classes.contactUsFormContainer}
                maxWidth="sm"
              >
                <Container>
                  <Typography variant="h3">Get In Touch</Typography>
                </Container>
                <form onSubmit={submitHandler}>
                  <Container>
                    <TextField
                      id="standard-basic"
                      label="Full Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      size="small"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      size="small"
                      type="email"
                      value={email}
                onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      label="Phone Number"
                      variant="outlined"
                      type="number"
                      margin="normal"
                      fullWidth
                      size="small"
                      value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className={classes.contactUsFormButton}>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ borderRadius: 0,marginRight: "10px" }}
                      >
                        Submit
                      </Button>
    {pro && <CircularProgress color="success" size="30px" />}

                    </div>
                  </Container>
                </form>
              </Container>
            </Grid>
            <Grid item xs={12} md={6} sx={{ backgroundColor: "#7ae582" }}>
              <Container className={classes.contactUsRight}>
                <Container className={classes.contactUsRightContainer}>
                  <div className={classes.contactUsRightTextContainer}>
                    <div className="contactUsRightTextTitle">
                      <Typography variant="h2" color="secondary">
                        Let's Get In Touch
                      </Typography>
                    </div>
                    <div className="contactUsRightTextPara">
                      <Typography variant="body1" color="secondary">
                        We're open for any suggestion or just to have a chat
                      </Typography>
                    </div>
                  </div>

                  <div className="contactUsRightInfo">
                    <div className="contactUsRightInfoList">
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <div className={classes.contactUsRightIcon}>
                              <ImLocation2 />
                            </div>
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="h6"
                                  color="secondary"
                                >
                                  Address:
                                </Typography>
                              </React.Fragment>
                            }
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body1"
                                  color="secondary"
                                >
                                713369 , Asansol , West Bengal , India
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <div className={classes.contactUsRightIcon}>
                              <ImPhone />
                            </div>
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="h6"
                                  color="secondary"
                                >
                                  Phone:
                                </Typography>
                              </React.Fragment>
                            }
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body1"
                                  color="secondary"
                                >
                                  <div>
                                  <a
                                    href="tel:+919064443033"
                                    style={{ color: "white" }}
                                  >
                                    +91-9064443033
                                  </a>
                                  </div>

                                  <div>
                                  <a
                                    href="tel:+919647750384"
                                    style={{ color: "white" }}
                                  >
                                    +91-9647750384
                                  </a>
                                  </div>

                                 
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <div className={classes.contactUsRightIcon}>
                              <ImMail4 />
                            </div>
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="h6"
                                  color="secondary"
                                >
                                  Email:
                                </Typography>
                              </React.Fragment>
                            }
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body1"
                                  color="secondary"
                                >
                                  <a
                                    href="mailto:contact.triodel@gmail.com"
                                    style={{ color: "white" }}
                                  >
                                    contact.triodel@gmail.com
                                  </a>
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </Container>
                <div className={classes.contactUsRightSocial}>
                  <SocialMediaBar />
                </div>
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
    </>
  );
}

export default ContactUS;
