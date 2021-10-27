export function getProductsForCategory(products, catSelected) {
  const productCategoryArray = products.filter(
    (product) => product.category_id === catSelected
  );
  if (productCategoryArray.length > 0) {
    return productCategoryArray;
  }
  return [];
}
export function createSearchlist(products) {
  const searcharray = products.map((product) => ({
    id: product.id,
    name: product.name.split(" ", 3),
  }));
  if (searcharray.length > 0) {
    return searcharray;
  }
  return [];
}
