export function getProductsForCategory(products, catSelected) {
  const productCategoryArray = products.filter(
    (product) => product.category_id === catSelected
  );
  if (productCategoryArray.length > 0) {
    return productCategoryArray;
  }
  return [];
}
