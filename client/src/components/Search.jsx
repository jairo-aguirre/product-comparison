/* eslint-disable no-use-before-define */
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import Autocomplete from "@material-ui/lab/Autocomplete";
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: "white",
  },
}));
export default function Search(props) {
  const classes = useStyles();
  return (
    <Autocomplete
      id="combo-box-demo"
      value={props.mode !== "search" ? "" : props.searchSelected}
      options={props.searchList}
      onChange={(e, value) => props.updateSearch(e, value)}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Search.."
          fullWidth
          classes={{
            root: classes.root,
          }}
        />
      )}
    />
  );
}
