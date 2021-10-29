// import ProductDetail from "./ProductDetail";
import "./Product.css";
import Productlist from "../components/Productlist";
export default function Comparison(props) {
  const features = props.comparelist.features;
  const products = props.comparelist.products;
  console.log(props.comparelist);
  const productArray = products.map((product, index) => {
    return (
      <Productlist
        key={product.id}
        id={product.id}
        index={index}
        name={product.name}
        image={product.image}
        description={product.description}
        price_cents={product.price_cents}
        rating={product.rating}
        sale={product.sale}
        url={product.url}
      />
    );
  });
  return <div>{productArray}</div>;
}

// const productIDs = props.location.selectedIDs || [];
// const productIDsObj = productIDs.reduce((obj, id) => {return {...obj, [id]:true}}, {});

// const prodFeatures = props.location.features || [];

// const prodComparison = prodFeatures.filter(feature => productIDsObj[feature.product_id]);

// const prodComparison2 = {};
// const prodFeatureNames = [];

// prodComparison.forEach((feature) => {
//   const id = feature.product_id;
//   if (!prodComparison2[id]) {
//     prodComparison2[id] = {};
//   }

//   prodComparison2[id][feature.feature_name] = feature.feature_value;

//   if (!prodFeatureNames.includes(feature.feature_name)) {
//     prodFeatureNames.push(feature.feature_name);
//   }
// });

// const createProductTable = prodFeatureNames.map(featureName => {
//   return (
//     <div className="detail">
//       <strong>
//         { featureName }
//       </strong>
//       {productIDs.map(id => (
//         <div>
//           { prodComparison2[id][featureName] }
//         </div>
//       ))}
//     </div>
//   );
// });

// return (
//   <div>
//     <h2>Comparison Table</h2>
//     <div>
//       <div className="detail">
//         <strong>
//            Product
//         </strong>
//           {productIDs.map(id => (
//             <div>
//               { id }
//             </div>
//           ))}
//       </div>
//       <div>{createProductTable}</div>
//     </div>
//   </div>
// );
