import Button from "@material-ui/core/Button";
import './Product.css';
import { useHistory } from "react-router-dom";

export default function CompareButton(props) {
  const history = useHistory();

  const handleClick = () => {
    // console.log('CLICKED');
    history.push({
      pathname: '/comparison',
      selectedIDs: props.selectedIDs,
      features: props.features
    });
  };

  return (
    
      <Button variant="contained" onClick={() => handleClick()}>
        Compare
      </Button>
    
  );
}