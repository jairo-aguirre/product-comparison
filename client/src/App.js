import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Product from "./components/Product";
import Category from "./components/Category";
export default function Application(props) {
  const [state, setState] = useState({ products: [], categories: [] });
  useEffect(() => {
    const URL1 = "http://localhost:3000/";
    const URL2 = "http://localhost:3000/categories/";
    Promise.all([axios.get(URL1), axios.get(URL2)]).then((all) => {
      console.log(all);
      const [first, second] = all;
      const products = first.data.products;
      const categories = second.data.categories;
      console.log(categories);
      setState((prev) => ({ ...prev, products, categories }));
    });
  }, []);
  const firstset = state.products.slice(0, 10);
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
    <div className="container">
      <h1>Products</h1>
      <hr />
      <br></br>
      <div className="row">{categoryArray}</div>
      <div className="row">{productArray}</div>
    </div>
  );
}
