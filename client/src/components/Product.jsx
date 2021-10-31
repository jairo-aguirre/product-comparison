import { useState, useEffect } from "react";
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
  
  useEffect(() => {
    
    for (const id of props.selected) {
      if(!selected) {
        if (props.id === id) {
          console.log(props.selected)
          console.log('props staet', props.state)
          setSelected(true);
          props.handleSelect(true, id, props);
          console.log(props.id)
          document.getElementById(`heart${id}`).style.color = "red";
        }
       
      } 
      if (!props.selected.includes(props.id)) {
        setSelected(false)
        document.getElementById(`heart${props.id}`).style.color = "#989898";
      }
      
    }
    // Side-effect!
  }, [props.selected]);
  

  const toggleSelected = () => {
    if (selected) {
      setSelected(false);
      document.getElementById(`heart${props.id}`).style.color = "#989898";
      props.removeProdIDs(props.id);
      props.handleSelect(false, props.id, props);
    } else {
      console.log('i am also being toggeled :(')
      props.addProdIDs(props.id);
      setSelected(true);
      document.getElementById(`heart${props.id}`).style.color = "red";
      props.handleSelect(true, props.id, props);
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
