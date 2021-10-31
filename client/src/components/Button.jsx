import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
export default function CloseButton(props) {
  return (
    <div className="savecompareButton">
      <Button
        color="primary"
        variant="contained"
        size="large"
        startIcon={<CloseIcon />}
        onClick={props.onClose}
        id={props.id}
      >
        Close
      </Button>
    </div>
  );
}
