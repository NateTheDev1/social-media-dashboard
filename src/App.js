import React from "react";
import AppStyles from "./styles/AppStyles";
import { Container, Switch } from "@material-ui/core";
import FacebookCard from "./components/FacebookCard";

const App = () => {
  const classes = AppStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Container maxWidth="md">
          <h1 className={classes.heading}>Social Media Dashboard</h1>
          <p className={classes.followers}>Total Followers: 23, 004</p>
        </Container>
        <div className={classes.darkModeSwitch}>
          <p className={classes.sub}>Dark Mode</p>
          <Switch />
        </div>
      </header>
      <Container maxWidth="md" className={classes.bottom}>
        <FacebookCard />
        <FacebookCard />
        <FacebookCard />
        <FacebookCard />
      </Container>
    </div>
  );
};

export default App;
