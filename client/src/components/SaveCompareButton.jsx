import Button from "@material-ui/core/Button";
import './Product.css';
// import { useHistory } from "react-router-dom";

export default function SaveCompareButton(props) {
  // const history = useHistory();

  const handleClick = () => {
    console.log('CLICKED');
  };

  return (
    <div className="savecompareButton" >
      <Button variant="contained" onClick={() => handleClick()}>
        Save
      </Button>
    </div>
  );
}