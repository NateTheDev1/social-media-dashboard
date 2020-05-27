import React from "react";
import { makeStyles } from "@material-ui/core";
import fbLogo from "../images/icon-facebook.svg";
import iconUp from "../images/icon-up.svg";

const cardStyles = makeStyles({
  root: {
    width: "20%",
    height: "200px",
    backgroundColor: "hsl(228, 28%, 20%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    borderTop: "5px solid hsl(208, 92%, 53%)",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
  top: {
    marginTop: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  handle: {
    marginLeft: "10%",
    color: "hsl(228, 34%, 66%)",
  },
  followers: {
    marginTop: "15%",
  },
  count: {
    fontSize: "3rem",
    fontWeight: "700",
  },
  followerTitle: {
    marginTop: "15%",

    color: "hsl(228, 34%, 66%)",
  },
  bottom: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  up: {
    marginRight: "3%",
  },
});

const FacebookCard = () => {
  const classes = cardStyles();
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <img src={fbLogo} className={classes.logo} />
        <p className={classes.handle}>@NateTheDev</p>
      </div>
      <div className={classes.followers}>
        <h2 className={classes.count}>1987</h2>
        <p className={classes.followerTitle}>F O L L O W E R S</p>
      </div>
      <div className={classes.bottom}>
        <img src={iconUp} className={classes.up} />
        <p>12 Today</p>
      </div>
    </div>
  );
};

export default FacebookCard;
