import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { getProducts, createSearchlist } from "./helper/selector";
import Product from "./components/Product";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
export default function Application(props) {
  const [state, setState] = useState({
    products: [],
    categories: [],
    searchArray: [],
    features: [],
    catSelected: 1,
    searchSelected: "",
    mode: "cat",
  });
  const [open, setOpen] = useState(false);
  const handleChange = (catSelected, mode = "cat") => {
    //set selection to the value selected
    setState((prev) => ({ ...prev, catSelected, mode }));
  };
  const updateSearch = (e, value, mode = "search") => {
    //set selection to the value selected
    if (!value) {
      e.preventDefault();
      return;
    }
    setState((prev) => ({ ...prev, mode, searchSelected: value }));
  };
  useEffect(() => {
    const URL1 = "/api/products";
    const URL2 = "/api/categories";
    const URL3 = "/api/features";

    Promise.all([axios.get(URL1), axios.get(URL2), axios.get(URL3)]).then(
      (all) => {
        console.log(all);

        const [first, second, third] = all;
        console.log(third.data);
        const products = first.data.products;
        const categories = second.data.categories;
        const features = third.data.features;
        const featuretypes = third.data.types;
        const searchArray = createSearchlist(featuretypes);
        // const searchArray = originalsearchArray.slice(0, 10);
        setState((prev) => ({
          ...prev,
          products,
          categories,
          features,
          searchArray,
        }));
      }
    );
  }, []);

  // const searchList = state.searchArray.filter(
  //   (post) =>
  //     state.query && post.name.toLowerCase().includes(state.query.toLowerCase())
  // );
  const firstset = getProducts({ ...state });
  console.log("products", state.mode, firstset);
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
        <Navbar
          searchList={state.searchArray}
          searchSelected={state.searchSelected}
          updateSearch={updateSearch}
          open={open}
        />
        <Category
          categories={state.categories}
          catSelected={state.catSelected}
          handleChange={handleChange}
        ></Category>
      </div>
      <div className="container">
        <div className="row">{productArray}</div>
      </div>
    </div>
  );
}
