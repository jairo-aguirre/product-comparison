// import ProductDetail from "./ProductDetail";
import "./Product.css";

export default function Comparison(props) {
  console.log('comparison features', props.data.products)
  const productNames = props.data.products.map((product) => {
    return (
      <th>{product.name}</th>
    )
  });

  const productImages = props.data.products.map((product) => {
    return(
      <td>
        <img src={product.image}></img>
      </td>
    )
  })
  const featureKeys = []
  for (const feature of props.data.features) {
    featureKeys.push(Object.keys(props.data.features))
  }
  
  console.log(featureKeys)
  return (
    <table>
    <tr>
      {productNames}
    </tr>
    <tr>
      {productImages}
    </tr>
    <tr>
      <td>Sue</td>
      <td>00002</td>
      <td>Red</td>
    </tr>
    <tr>
      <td>Barb</td>
      <td>00003</td>
      <td>Green</td>
    </tr>
  </table>
  );
}
