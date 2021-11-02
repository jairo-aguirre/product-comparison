import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { getProducts, createSearchlist } from "./helper/selector";
import { useLogin } from "./hooks/useLogin";
import Product from "./components/Product";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import CompBubbleElement from "./components/CompBubbleElement";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useHistory } from "react-router-dom";
import Comparison from "./components/Comparison";
import CloseButton from "./components/Button";
import Box from "@material-ui/core/Box";
import SaveCompareButton from "./components/SaveCompareButton";

//set constants for modes
const COMPARE = "COMPARE";
const CAT = "cat";
let dataArray = {};

const sendComparisonCookie = (products) => {
  const formUrlEncoded = (x) => {
    return Object.keys(x).reduce(
      (p, c) => p + `&${c}=${encodeURIComponent(x[c])}`,
      ""
    );
  };
  
    const data = {
      
      product_ids: products,
    };
  
    axios
      .put("/api/comparisons/1", formUrlEncoded(data))
      .then((data) => {
       
      })
      .catch((error) => {
        console.log("error", error);
      });
  
  
};

//declare first state for comparison
let comparison = {
  id: 1,
  name: ["compare here", "compare here", "compare here"],
  product_ids: [1, 2, 3],
};
let productComparison = [
  { id: 1, name: "compare here" },
  { id: 2, name: "compare here" },
  { id: 3, name: "compare here" },
];

export default function Application(props) {
  const [state, setState] = useState({
    products: [],
    categories: [],
    searchArray: [],
    features: [],
    searchSelected: "",
    catSelected: 1,
    selected: 1,
    comparison: comparison,
    mode: CAT,
    productComparison: productComparison,
  });
  const { login, getUser, logOut } = useLogin();

  //get the list ids from each droppable area
  let id2List = {
    id: "products",
    droppable: "products",
    droppable2: "comparison",
  };

  //get the list of products in each droppable area
  let getList = (id) => {
    return state[id2List[id]];
  };

  //set selectedProductIDs
  const [selectedProductIDs, setSelectedProductIDs] = useState([]);

  //add productIds upon select
  const addProdIDs = (id) => {
    if (selectedProductIDs.length >= 3) {
      const IDs = selectedProductIDs;
      IDs.splice(0, 1);
      // console.log("i am the selected ids in the add func", IDs);
      sendComparisonCookie([...IDs, id])
      setSelectedProductIDs([...IDs, id]);
      
    } else {
      setSelectedProductIDs((prev) => {
        // console.log('add_ID', id);
        // console.log("selectedIds", [...prev, id]);
        sendComparisonCookie([...prev, id])
        return [...prev, id];
      });
      
    }
    
  };

  //remove product ids upon unselect
  const removeProdIDs = (id) => {
    setSelectedProductIDs((prev) => {
      // debugger;
      const index = prev.findIndex((e) => e === id);
      // console.log('remID', id);
      const prev2 = [...prev];
      prev2.splice(index, 1);
      console.log("remPREV", prev2);
      return prev2;
    });
  };

  //function to close compare mode
  const onClose = () => {
    setState((prev) => ({ ...prev, mode: "cat" }));
  };

  //function to send features to database and retrieve it to render in comparison
  const sendFeatures = (products) => {
    const formUrlEncoded = (x) => {
      return Object.keys(x).reduce(
        (p, c) => p + `&${c}=${encodeURIComponent(x[c])}`,
        ""
      );
    };

    const data = {
      product_ids: products,
    };

    axios
      .post("/api/features", formUrlEncoded(data))
      .then((data) => {
        dataArray.features = data.data.features;
        dataArray.products = data.data.products;
      })
      .then(() => {
        setState((prev) => ({ ...prev, mode: "COMPARE" }));
       
      })
      .catch((error) => {
        //console.log("error", error);
      });
  };

  //registers drag end event
  const onDragEnd = (result) => {
    const { source, destination } = result;
    

    // dropped outside the list or in product list
    if (
      !destination ||
      destination.droppableId === "droppable" ||
      source.droppableId === "droppable2" ||
      source.droppableId === destination.droppableId
    ) {
      return;
    } else {
      //this is for if it drops into droppable2 (comparison area)

      const addId = getList(destination.droppableId).product_ids;

      let products = getProducts(state);

      let value = products[source.index];
      //make sure two of the same product cannot be added
      for (const id of selectedProductIDs) {
        if (id === value.id) {
          return;
        }
      }

      let comparison = state.comparison;

      let productComparison = state.productComparison;

      //do the same as above but for the part of state that has all of the product info (not just ID)
      productComparison.splice(0, 1);
      productComparison.push(value);
      //add this ID to Jairos collection
      addProdIDs(value.id);

      //finally set the state so it shows in compare bubble
      setState((prev) => ({
        ...prev,

        comparison: {
          ...comparison,
          comparison,
          productComparison,
        },
      }));
    }
  };

  // const [open, setOpen] = useState(false);

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
    const URL4 = "/api/comparisons"

    Promise.all([axios.get(URL1), axios.get(URL2), axios.get(URL3), axios.get(URL4)]).then(
      (all) => {
        // console.log(all);

        const [first, second, third, fourth] = all;
        const products = first.data.products;
        const categories = second.data.categories;
        const features = third.data.features;
        const featuretypes = third.data.types;
        const searchArray = createSearchlist(featuretypes);
        const productComparison = fourth.data.cookies
        if (productComparison.length === 2) {
          productComparison.unshift({ id: 1, name: "compare here" })
        }
        if (productComparison.length === 1) {
          productComparison.unshift({ id: 1, name: "compare here" })
          productComparison.unshift({ id: 1, name: "compare here" })
        }
        if (productComparison.length === 0) {
          productComparison.push({ id: 1, name: "compare here" })
          productComparison.push({ id: 1, name: "compare here" })
          productComparison.push({ id: 1, name: "compare here" })
        }
        // const searchArray = originalsearchArray.slice(0, 10);
        setState((prev) => ({
          ...prev,
          products,
          categories,
          features,
          searchArray,
          productComparison
        }));
      }
    );
  }, []);

  // const searchList = state.searchArray.filter(
  //   (post) =>
  //     state.query && post.name.toLowerCase().includes(state.query.toLowerCase())
  // );
  const firstset = getProducts({ ...state });
  // console.log("products", state.mode, firstset);
  const productArray = firstset.map((product, index) => {
    let id = product.id.toString();
    return (
      <Draggable key={product.id} draggableId={id} index={index}>
        {(provided) => (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Product
              key={product.id}
              id={product.id}
              index={index}
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
              handleSelect={handleSelect}
              selected={selectedProductIDs}
              handleToggle={handleToggle}
              sendCookie={sendComparisonCookie}
            />
          </li>
        )}
      </Draggable>
    );
  });

  const compareArray = [];

  //delete comparisons
  const onDelete = () => {
    let comparison = {
      id: 1,
      name: ["compare here", "compare here", "compare here"],
      product_ids: [1, 2, 3],
    };
    let productComparison = [
      { id: 1, name: "compare here" },
      { id: 2, name: "compare here" },
      { id: 3, name: "compare here" },
    ];
    let IDs = selectedProductIDs;
    IDs = [];
    setSelectedProductIDs([...IDs]);
    setState((prev) => ({ ...prev, comparison, productComparison }));
    sendComparisonCookie(IDs)
  };

  //maps the comparison state in order to render comparisons in bubbles
  const compareArrayMapped = state.productComparison.map(
    (comparison_id, index) => {
      let comparison = state.comparison;

      let id = comparison.id.toString();
      return (
        <Draggable key={comparison_id.id} draggableId={id} index={index}>
          {(provided) => (
            <li
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <CompBubbleElement
                key={comparison.id}
                id={comparison.id}
                image={comparison_id.image}
                name={comparison_id.name}
              />
              {provided.placeholder}
            </li>
          )}
        </Draggable>
      );
    }
  );
  compareArray.push(compareArrayMapped);

  const history = useHistory();

  //set mode to compare and render comparison page
  const handleClick = (mode = "COMPARE") => {
    // console.log('CLICKED');
    console.log("selected product ids", selectedProductIDs);
    
    sendFeatures(selectedProductIDs);
  };

  //update drag and drop stuff for select button
  const handleSelect = (add, id, value) => {
    const comparison = state.comparison;
    const productComparison = state.productComparison;
    if (add) {
      // productComparison.splice(0, 1);
      // productComparison.push(value);
      // console.log(value)
      // console.log(productComparison)
    } else {
      for (const product of productComparison) {
        if (product.id === id) {
          let index = productComparison.indexOf(product);
          productComparison[index] = { id: 1, name: "compare here" };
        }
      }
    }
    sendComparisonCookie(selectedProductIDs)

    setState((prev) => ({
      ...prev,

      comparison: {
        ...comparison,
        product_ids: selectedProductIDs,
        comparison,
        productComparison,
      },
    }));
  };

  //similar to handle select but specifically for toggling on drag
  const handleToggle = (add, id, value) => {
    const comparison = state.comparison;
    const productComparison = state.productComparison;
    if (add) {
      productComparison.splice(0, 1);
      productComparison.push(value);
      // console.log(productComparison);
    } else {
      for (const product of productComparison) {
        if (product.id === id) {
          let index = productComparison.indexOf(product);
          productComparison[index] = { id: 1, name: "compare here" };
        }
      }
    }
    
    setState((prev) => ({
      ...prev,

      comparison: {
        ...comparison,
        product_ids: selectedProductIDs,
        comparison,
        productComparison,
      },
    }));
    
  };

  return (
    <div>
      <div>
        <Navbar
          searchList={state.searchArray}
          searchSelected={state.searchSelected}
          updateSearch={updateSearch}
          isLoggedIn={state.isLoggedIn}
          getUser={getUser}
          login={login}
          logOut={logOut}
          mode={state.mode}
        />
        <Category
          categories={state.categories}
          catSelected={state.catSelected}
          handleChange={handleChange}
          selectedIDs={selectedProductIDs}
          features={state.features}
          handleClick={handleClick}
          onClick={onDelete}
          mode={state.mode}
        ></Category>
      </div>
      {state.mode === COMPARE && (
        <div>
          <Box display="flex" justifyContent="space-between">
            <CloseButton onClose={onClose} />
            <SaveCompareButton productsIDs={selectedProductIDs} login={login} />
          </Box>
          <Comparison data={dataArray} />
        </div>
      )}
      {state.mode !== "COMPARE" && (
        <div className="lists">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <ul
                  className="drag"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="container">
                    {/* <div className="row">{categoryArray}</div> */}
                    <div className="row">{productArray}</div>
                    {provided.placeholder}
                  </div>
                </ul>
              )}
            </Droppable>

            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                <ul
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {provided.placeholder}
                  <div className="footer">
                    {compareArray}
                    {provided.placeholder}
                  </div>
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      )}
    </div>
  );
}
