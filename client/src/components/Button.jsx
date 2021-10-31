import Button from "@material-ui/core/Button";

export default function CloseButton(props) {
  return (
    <div className="savecompareButton" >
    <Button variant="contained" onClick={props.onClose} id={props.id}>
      Close
    </Button>
    </div>
  );
}