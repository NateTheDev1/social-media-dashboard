import React from "react";
import AppStyles from "./styles/AppStyles";
import { Container, Switch } from "@material-ui/core";

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
    </div>
  );
};

export default App;
