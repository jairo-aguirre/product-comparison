import { useState } from "react";
import "./Product.css";

export default function Product(props) {
  const [selected, setSelected] = useState(false);
  
//trying to toggle select on drag
  // const handleEvent = (event) => {
  //   console.log('des props', props.toggle)
  //   if (event.type === "mouseup") {
      
    
  //     if (props.toggle === props.id) {
  //       setSelected(true)
  //     }
  //      } 
  //  }
  
  
  

  const toggleSelected = () => {
    if (selected) {
      setSelected(false);
      document.getElementById(`heart${props.index}`).style.color = "#989898";
      props.removeProdIDs(props.id);
      props.handleSelect(false, props.id, props);
    } else {
      setSelected(true);
      document.getElementById(`heart${props.index}`).style.color = "red";
      props.addProdIDs(props.id);
      props.handleSelect(true, props.id, props);
    }
  };

  return (
    <div className="col">
      <div className="card">
        <span id={`heart${props.index}`} className="heart">
          {!selected && (
            <i
              onClick={() => {
                toggleSelected();
              }}
              className="fas fa-compress"
            ></i>
          )}
          {selected && (
            <i
              onClick={() => {
                toggleSelected();
              }}
              className="fas fa-compress-arrows-alt"
            ></i>
          )}
        </span>
        <img src={props.image} className="first-image" alt="" />

        {/* <div className="card-body">
          <div></div>
          <hr />
          <center>
            <h5 className="card-title">{props.name}</h5>
          </center>
        </div> */}
      </div>
    </div>
  );
}
