import "./Product.css";

export default function Productlist(props) {
  return (
    <div className="col">
      <div className="card">
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
