import Button from "@material-ui/core/Button";
import './Product.css';


export default function CompareButton(props) {
 

  return (
    
      <Button onClick={() => {props.handleClick("COMPARE")}}>
        Compare
      </Button>
    
  );
}