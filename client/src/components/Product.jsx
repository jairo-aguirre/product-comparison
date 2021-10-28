import { useState } from 'react';
import './Product.css';

export default function Product(props) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    if (selected) {
      setSelected(false);
      props.removeProdIDs(props.id);
    } else {
      setSelected(true);
      props.addProdIDs(props.id);
    }
  };

  return (
    <div className="col" >
      
      <div className="card">
        <div className="card-body">
          <div>
            {!selected && <i onClick={() => {toggleSelected()}} className="fas fa-compress"></i>}
            {selected && <i onClick={() => {toggleSelected()}} className="fas fa-compress-arrows-alt"></i>}
          </div>
          <img src={props.image} className="first-image" alt="" />
          <hr />
          <center>
            <h5 className="card-title">{props.name}</h5>
          </center>
        </div>
      </div>
      
    </div>
  );
}