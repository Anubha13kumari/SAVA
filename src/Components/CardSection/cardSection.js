import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardComponent from "../CardComponents/cardComponent";

function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.textWrapper}>
        <Typography variant="h1" className={classes.title}>
          What we are upto?
        </Typography>
        <Typography variant="h7" className={classes.subtitle2}>
          We are not just a crazy fast end-to-end hiring service, we are also a community. We are a
          pro-labour movement and believe that stipends must start at ₹10k/month.
        </Typography>
      </Box>
      <Container>
        <Box className={classes.wrapper}>
          <Box className={classes.leftContainer}>
            <CardComponent
              image="assests/images/cardOne.gif"
              title="What are we trying to do?"
              content="Sava is an invite-only community of content creators looking to empower themselves by sharing what they’ve learnt overtime"
              buttonTitle="Join our Community"
            />
          </Box>
          <Box className={classes.rightContainer}>
            <CardComponent
              image="assests/images/cardTwo.gif"
              title="What's the catch for Startups?"
              content="Sava sources these brilliant Content Creators to startups who are looking for Creative Talent as interns."
              buttonTitle="Learn More"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F7FAFE",
  },
  wrapper: {
    display: "flex",
    height: "100vh",
    width: "100%",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "100%",
    },
  },
  leftContainer: {
    display: "flex",
    flex: 4,
    flexDirection: "column",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  rightContainer: {
    flex: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // main Access alignment(vertical ) (y  axis)    &&   flexDirection: "row",   (x  axis)
    alignItems: "center", // cross access alignment(Horizontal)(x  axis)  && flexDirection: "row",   (y  axis)
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  title: {
    padding: "20px",
    paddingTop: "110px",
    fontWeight: " bold",
    fontSize: "2.3565rem",
  },
  subtitle: {
    color: "#96BB7C",
    marginTop: "120px",
    fontWeight: "bold",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
  },
  subtitle2: {
    inlineSize: "700px",
    overflowWrap: "break-word",
    color: "#808080",
    fontSize: "16px",
    lineHeight: "32px",
  },
}));

export default HeroSection;
