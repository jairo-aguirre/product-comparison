import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { getProductsForCategory } from "./helper/selector";
import Product from "./components/Product";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

// For the floating Compare button
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

export default function Application(props) {
  const [state, setState] = useState({
    products: [],
    categories: [],
    features: [],
    searchValue: "",
    catSelected: 1,
  });
  
  const handleChange = (catSelected) => {
    //set selection to the value selected
    setState((prev) => ({ ...prev, catSelected }));
  };
  
  const [selectedProductIDs, setSelectedProductIDs] = useState([]);
  const history = useHistory();

  const addProdIDs = (id) => {
    setSelectedProductIDs((prev) => {
      return [...prev, id];
    });
  }
  
  const removeProdIDs = (id) => {
    setSelectedProductIDs((prev) => {
      const index = prev.findIndex((e) => e === id);
      prev.splice(index, 1);
      return prev;
    });
  }
  
  useEffect(() => {
    const URL1 = "/api/products";
    const URL2 = "/api/categories";
    const URL3 = "/api/features";
    Promise.all([axios.get(URL1), axios.get(URL2), axios.get(URL3)]).then((all) => {
    // Promise.all([axios.get(URL1), axios.get(URL2)]).then((all) => {
      console.log(all);
      const [first, second, third] = all;
      // const [first, second] = all;
      const products = first.data.products;
      const categories = second.data.categories;
      const features = third.data.features;
      console.log(categories);
      setState((prev) => ({ ...prev, products, categories, features }));
      // setState((prev) => ({ ...prev, products, categories }));
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
        addProdIDs={addProdIDs}
        removeProdIDs={removeProdIDs}
      />
    );
  });
  
  const handleClick = () => {
    history.push({
      pathname: '/comparison',
      selectedIDs: selectedProductIDs,
      features: state.features
    });
  };

  return (
    <div>
      <div>
        <Navbar searchValue={state.searchValue} />
        <Category
          categories={state.categories}
          catSelected={state.catSelected}
          handleChange={handleChange}
        ></Category>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended">
              <NavigationIcon sx={{ mr: 1 }} />
                Compare
            </Fab>
        </Box>
      </div>
      <div className="container">
        <div className="row">{productArray}</div>
        <Button onClick={handleClick}>Compare</Button>
      </div>
    </div>
  );
}