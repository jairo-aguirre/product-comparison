export default function Product(props) {
  return (
    <div className="col">
      <div className="card">
        <img src={props.image} className="first-image" alt="" />
        <div className="card-body">
          <hr />
          <center>
            <h5 className="card-title">{props.name}</h5>
          </center>
        </div>
      </div>
    </div>
  );
}
