import { makeStyles } from "@material-ui/core";

const AppStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    color: "white",
  },
  header: {
    boxSizing: "border-box",
    padding: "20px 1.25%",
    margin: "0 auto",
    backgroundColor: "hsl(232, 19%, 15%)",
    color: "hsl(0, 0%, 100%)",
    width: "100%",
    height: "15%",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    display: "flex",
    width: "100%",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "hsl(0, 0%, 100%)",
  },
  followers: {
    marginTop: "1.5%",
    color: "hsl(228, 34%, 66%)",
  },
  darkModeSwitch: {
    width: "20%",
    display: "flex",
    alignItems: "center",
  },
  sub: {
    marginRight: "1%",
    color: "hsl(228, 34%, 66%)",
  },
  bottom: {
    marginTop: "5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AppStyles;
