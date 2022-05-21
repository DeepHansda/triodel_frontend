import React, { useEffect } from "react";
import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  unstable_ClassNameGenerator,
} from "@mui/material";
import useStyles from "./aboutStyles";
import { BsShop } from "react-icons/bs";
import { VscRocket } from "react-icons/vsc";
import { MdBusiness } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { FaTasks, FaHandshake } from "react-icons/fa";
import Weapons from "../../Sub_Components/Weapons/Weapons";
import Contact from "../../Sub_Components/Contact/Contact";

function About({ SetOpenSideBar }) {
  const classes = useStyles();
  useEffect(() => {
    SetOpenSideBar(false);
  }, []);
  return (
    <div className="about">
      <div className={classes.aboutTitleIntroContainer}>
        <h2 className={classes.aboutTitleIntro}>About Us</h2>
      </div>
      <div className={classes.aboutServiceList}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <li className={classes.aboutServiceListItem}>
              <Paper elevation={4} className={classes.itemPaper}>
                <h2>We Are Helping</h2>
              </Paper>
            </li>
          </Grid>

          <Grid item xs={12} sm={3}>
            <li className={classes.aboutServiceListItem}>
              <Paper elevation={4} className={classes.itemPaper}>
                <h2 className={classes.aboutServiceIcon}>
                  <BsShop />
                </h2>
                <Typography variant="h5">Locals</Typography>
              </Paper>
            </li>
          </Grid>
          <Grid item xs={12} sm={3}>
            <li className={classes.aboutServiceListItem}>
              <Paper elevation={4} className={classes.itemPaper}>
                <h2 className={classes.aboutServiceIcon}>
                  <MdBusiness />
                </h2>
                <Typography variant="h5">Business </Typography>
              </Paper>
            </li>
          </Grid>
          <Grid item xs={12} sm={3}>
            <li className={classes.aboutServiceListItem}>
              <Paper elevation={4} className={classes.itemPaper}>
                <h2 className={classes.aboutServiceIcon}>
                  <VscRocket />
                </h2>
                <Typography variant="h5">StartUps</Typography>
              </Paper>
            </li>
          </Grid>
        </Grid>
      </div>

      <div className={classes.aboutTectContainer}>
        <Weapons />
      </div>

      <div className={classes.aboutVisionContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper elevation={5} className={classes.aboutVisionTextContainer}>
              <Container className={classes.aboutVisionTextContainerCore}>
                <Typography variant="h4">Our Vision</Typography>
                <Typography variant="body2">
                  To develop Mobile, Web & BI Solutions with latest
                  technologies, standard processes, committed support and
                  consulting that brings growth & success for our clients.
                </Typography>
              </Container>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Container className={classes.aboutValuesContainer}>
              <div className={classes.aboutValuesContainerTitle}>
                <Typography variant="h2">Values</Typography>
              </div>
              <ul className={classes.aboutValuesList}>
                <li className={classes.aboutValuesItemContainer}>
                  <Paper elevation={4} className={classes.aboutValuesItem}>
                    <div className={classes.aboutValuesItemIcon}>
                      <h2>
                        <FaHandshake />
                      </h2>
                    </div>
                    <div className={classes.aboutValuesItemText}>
                      <Typography variant="h5">Integrity</Typography>
                    </div>
                  </Paper>
                </li>
                <li className={classes.aboutValuesItemContainer}>
                  <Paper elevation={4} className={classes.aboutValuesItem}>
                    <div className={classes.aboutValuesItemIcon}>
                      <h2>
                        <FaTasks />
                      </h2>
                    </div>
                    <div className={classes.aboutValuesItemText}>
                      <Typography variant="h5">Commitment</Typography>
                    </div>
                  </Paper>
                </li>
                <li className={classes.aboutValuesItemContainer}>
                  <Paper elevation={4} className={classes.aboutValuesItem}>
                    <div className={classes.aboutValuesItemIcon}>
                      <h2>
                        <AiOutlineComment />
                      </h2>
                    </div>
                    <div className={classes.aboutValuesItemText}>
                      <Typography variant="h5">Co-Operation</Typography>
                    </div>
                  </Paper>
                </li>
              </ul>
            </Container>
          </Grid>
        </Grid>
      </div>
      <div className={classes.aboutContactUs}>
        <Contact />
      </div>

      <div className={classes.aboutGoalContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={5}>
            <div className={classes.aboutGoalContainerImg}>
              <img
                src="https://res.cloudinary.com/manjiro/image/upload/v1652153593/mywebsite/normal/annie-spratt-QckxruozjRg-unsplash_wulawa.jpg"
                alt="goal"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={7}>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      varient="h2"
                      sx={{ fontWeight: "bold", fontSize: "60px" }}
                    >
                      Our Goals
                    </Typography>
                  }
                  secondary={
                    <Typography
                      varient="body1"
                      sx={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                     Saying “we want a better website” is like saying, “we want a better business”. But what exactly does “a better business” mean? Do you want to increase revenue? Maximize profitability? Or maybe improve customer satisfaction? This could mean a number of different things for different people in different situations. Unfortunately, simply wanting a better website is not a clear objective and many professionals end up learning the hard way that solely stating so won’t correlate to business results.
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      varient="h4"
                      sx={{ fontWeight: "400", fontSize: "40px" }}
                    >
                      Quality
                    </Typography>
                  }
                  secondary={
                    <Typography varient="body1">
                      Have a cutting-edge app idea but not sure how to get
                      started? Our team of senior business analysts, seasoned
                      project managers, experienced coders and UI/UX experts can
                      deliver customized mobile app development services to
                      businesses operating in different industry niches.
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      varient="h4"
                      sx={{ fontWeight: "400", fontSize: "40px" }}
                    >
                      Results
                    </Typography>
                  }
                  secondary={
                    <Typography varient="body1">
                      With a strategic approach and creative mind, our
                      full-stack website developers can craft industry-standard
                      web applications that help in unleashing the full
                      potential of your business. Engage our full-stack web
                      development services to get future-ready web apps.
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />
            </List>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
