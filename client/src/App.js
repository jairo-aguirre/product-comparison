import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { getProductsForCategory } from "./helper/selector";
import Product from "./components/Product";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
export default function Application(props) {
  const [state, setState] = useState({
    products: [],
    categories: [],
    searchValue: "",
    catSelected: 1,
  });
  const handleChange = (catSelected) => {
    //set selection to the value selected
    setState((prev) => ({ ...prev, catSelected }));
  };

  useEffect(() => {
    const URL1 = "/api/products";
    const URL2 = "/api/categories";
    Promise.all([axios.get(URL1), axios.get(URL2)]).then((all) => {
      console.log(all);
      const [first, second] = all;
      const products = first.data.products;
      const categories = second.data.categories;
      console.log(categories);
      setState((prev) => ({ ...prev, products, categories }));
    });
  }, []);
  const firstset = getProductsForCategory(state.products, state.catSelected);
  const productArray = firstset.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
        description={product.description}
        price_cents={product.price_cents}
        rating={product.rating}
        sale={product.sale}
        url={product.url}
        category_id={product.category_id}
      />
    );
  });

  return (
    <div>
      <div>
        <Navbar searchValue={state.searchValue} />
        <Category
          categories={state.categories}
          catSelected={state.catSelected}
          handleChange={handleChange}
        ></Category>
      </div>
      <div className="container">
        {/* <div className="row">{categoryArray}</div> */}
        <div className="row">{productArray}</div>
      </div>
    </div>
  );
}
