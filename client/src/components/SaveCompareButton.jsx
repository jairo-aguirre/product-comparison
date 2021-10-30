import Button from "@material-ui/core/Button";
import './Product.css';
import sendComparison from "../helper/button-functions";

export default function SaveCompareButton(props) {
  
  return (
    <div className="savecompareButton" >
      <Button variant="contained" onClick={() => sendComparison(props.productsIDs)}>
        Save
      </Button>
    </div>
  );
}