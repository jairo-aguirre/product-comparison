import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Product from "./components/Product";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
export default function Application(props) {
  const [state, setState] = useState({
    products: [],
    categories: [],
    searchValue: "",
  });
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
  const firstset = state.products.slice(100, 300);
  const productArray = firstset.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
      />
    );
  });
  const categoryArray = state.categories.map((category) => {
    return <Category key={category.id} id={category.id} name={category.name} />;
  });
  return (
    <div>
      <div>
        <Navbar searchValue={state.searchValue} />
      </div>
      <div className="container">
        <div className="row">{categoryArray}</div>
        <div className="row">{productArray}</div>
      </div>
    </div>
  );
}
