import Button from "@material-ui/core/Button";
import './Product.css';

export default function DeleteButton(props) {
  console.log("props", props)
  return (
    
    
       <Button onClick={props.onClick} variant='contained'>Delete</Button>
    
     
      
    
    
  )
}