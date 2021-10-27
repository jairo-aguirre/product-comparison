import ProductDetail from "./ProductDetail";

export default function Comparison(props) {
  const productIDs = props.location.selectedIDs || [];
  const createProductTable = productIDs.map((product) => {
    return (
      <ProductDetail
        key={product}
        id={product}
        // name={product.name}
        // image={product.image}
        // description={product.description}
        // price_cents={product.price_cents}
        // rating={product.rating}
        // sale={product.sale}
        // url={product.url}
      />
    );
  });

  return (
    <div>
      <h2>Comparison Table</h2>
      <div className="container">
        <div className="row">{createProductTable}</div>
      </div>
    </div>
  );
};