import Button from "@material-ui/core/Button";
import "./Product.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
export default function DeleteButton(props) {
  return (
    <Button onClick={props.onClick}>
      <DeleteOutlineIcon />
      Delete
    </Button>
  );
}
