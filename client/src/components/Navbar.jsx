import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Navbar(props) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <LocalOfferIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          PriceCompare
        </Typography>

        <Search
          searchList={props.searchList}
          searchSelected={props.searchSelected}
          updateSearch={props.updateSearch}
        />
        <SearchIcon />
        {!props.login.status && (
          <Button color="inherit" onClick={props.getUser}>
            Login
          </Button>
        )}
        {props.login.status && (
          <Typography variant="body2">{props.login.user.first_name}</Typography>
        )}
        {props.login.status && (
          <Button color="inherit" onClick={props.logOut}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
