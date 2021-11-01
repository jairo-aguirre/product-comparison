import { useState, useEffect } from "react";
import "./Product.css";

export default function Product(props) {
  const [selected, setSelected] = useState(false);

//use effect is triggered when the selected IDs change, in order to toggle selected on drag  
  useEffect(() => {
    
      if(!selected) {
        //the selected product array must include this specific ID to trigger changes
        if (props.selected.includes(props.id)) {
          setSelected(true);
          props.handleSelect(true, props.id, props);
          document.getElementById(`heart${props.id}`).style.color = "red";
        }
      } 
      //for unselecting toggle
      if (!props.selected.includes(props.id)) {
        setSelected(false)
        document.getElementById(`heart${props.id}`).style.color = "#989898";
      }
  }, [props.selected]);
  

  const toggleSelected = () => {
    
    if (selected) {
      setSelected(false);
      document.getElementById(`heart${props.id}`).style.color = "#989898";
      props.removeProdIDs(props.id);
      props.handleToggle(false, props.id, props);
    } else {
      
      props.addProdIDs(props.id);
      setSelected(true);
      document.getElementById(`heart${props.id}`).style.color = "red";
      props.handleToggle(true, props.id, props);
    }
  };

  return (
    <div className="col">
      <div className="card">
        <span id={`heart${props.id}`} className="heart">
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
