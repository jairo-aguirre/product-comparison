import { forwardRef } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import SaveIcon from "@material-ui/icons/Save";
import "./Product.css";
// import sendComparison from "../helper/button-functions";
import { useSave } from "../hooks/useSave";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function SaveCompareButton(props) {
  const { open, sendComparison, handleClose } = useSave();
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
