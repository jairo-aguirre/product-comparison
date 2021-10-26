export default function Comparison(props) {
  const productIDs = props.location.selectedIDs || [];
  
  return (
    <div>
      <h1>Comparison Table</h1>
      <span>{productIDs}</span>
    </div>
  );
};