/* eslint-disable no-use-before-define */
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(162, 178, 231)"
  }
}));

export default function Search(props) {
  const classes = useStyles();

  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.searchList}
      onChange={(e, value) => props.updateSearch(e, value)}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" className={classes.root} color="secondary" placeholder="Search.." size="small" fullWidth />
      )}
    />
  );
}
