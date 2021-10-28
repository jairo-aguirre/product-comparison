/* eslint-disable no-use-before-define */
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
export default function Search(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.searchList}
      onChange={(e, value) => props.updateSearch(e, value)}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Search.." fullWidth />
      )}
    />
  );
}
