import Button from "@material-ui/core/Button";
import './Product.css';


export default function SaveCompareButton(props) {
  
  return (
    <div className="savecompareButton" >
      <Button variant="contained" onClick={props.sendComparison(props.productsIDs)}>
        Save
      </Button>
    </div>
  );
}