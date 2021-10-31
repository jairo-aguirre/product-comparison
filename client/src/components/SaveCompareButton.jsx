import { Fragment, forwardRef } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import "./Product.css";
// import sendComparison from "../helper/button-functions";
import { useSave } from "../hooks/useSave";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SaveCompareButton(props) {
  const { open, sendComparison, handleClose } = useSave();
  const classes = useStyles();
  const action = (
    <Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );
  return (
    props.login.status && (
      <div className="savecompareButton">
        <Button
          color="primary"
          variant="contained"
          size="large"
          startIcon={<SaveIcon />}
          onClick={() => sendComparison(props.productsIDs, props.login.user)}
        >
          Save
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {`Hi ${props.login.user.first_name} your comparisons are saved for future`}
          </Alert>
        </Snackbar>
      </div>
    )
  );
}
