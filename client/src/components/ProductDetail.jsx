export default function ProductDetail(props) {
  return (
    <div >
      {/* <img src={props.image} className="first-image" alt="" /> */}
      <center>
        <h5>{props.id}</h5>
        <hr />
        <h5>{props.feature_name}</h5>
        <h5>{props.feature_value}</h5>
      </center>
    </div>
  );
}