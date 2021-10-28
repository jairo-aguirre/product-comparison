export function getProducts(newstate) {
  console.log("inside selector", newstate);
  const catSelected = newstate.catSelected;
  const products = newstate.products;
  const features = newstate.features;
  const searchSelected = newstate.searchSelected;
  if (newstate.mode === "cat") {
    const productCategoryArray = products.filter(
      (product) => product.category_id === catSelected
    );
    if (productCategoryArray.length > 0) {
      return productCategoryArray;
    }
  }
  if (newstate.mode === "search") {
    const productSearchArray = features
      .filter((feature) => feature.typeOf === searchSelected.name)
      .map((feature) => feature.product_id);
    if (productSearchArray.length > 0) {
      return products.filter((product) =>
        productSearchArray.includes(product.id)
      );
    }
  }
  return [];
}
export function createSearchlist(featuretypes) {
  const searcharray = featuretypes.map((feature) => ({
    name: feature.typeOf ?? "RANDOM",
  }));
  if (searcharray.length > 0) {
    return searcharray;
  }
  return [];
}
