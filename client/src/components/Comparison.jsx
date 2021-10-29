// import ProductDetail from "./ProductDetail";
import "./Product.css";

export default function Comparison(props) {
  const productIDs = props.location.selectedIDs || [];
  const productIDsObj = productIDs.reduce((obj, id) => {return {...obj, [id]:true}}, {});

  const prodFeatures = props.location.features || [];

  const prodComparison = prodFeatures.filter(feature => productIDsObj[feature.product_id]);
  
  const prodComparison2 = {};
  let prodFeatureNames = [];
  let prodID = 0;
  const dontCompare = ['id', 'product_id', 'created_at', 'updated_at'];

  for (const [key, value] of Object.entries(prodComparison)) {
    for (const [key1, value1] of Object.entries(value)) {
      if (key1 === 'product_id') {
        if (!prodComparison2[value1]) {
          prodID = value1;
          prodComparison2[value1] = {};
        }
      }
      if (!dontCompare.includes(key1)) {
        prodComparison2[prodID][key1] = value1;
        if (!prodFeatureNames.includes(key1)) {
          prodFeatureNames.push(key1);
        }
      }
    }
  }
  console.log('prodComparison2', prodComparison2);

  const createProductTable = prodFeatureNames.map(featureName => {
    console.log(featureName);
    return (
      <div className="compareTable">
        <strong>
          { featureName }
        </strong>
        {productIDs.map(id => (
          <div>
            { prodComparison2[id][featureName] }
          </div>
        ))}
      </div>
    );
  });
  
  return (
    <div>
      <h2>Comparison Table</h2>
      <div>
        <div className="compareTable">
          <strong>
             Product
          </strong>
            {productIDs.map(id => (
              <div>
                { id }
              </div>
            ))}
        </div>
        <div>{createProductTable}</div>
      </div>
    </div>
  );
};