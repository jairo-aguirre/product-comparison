import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { getProducts, createSearchlist } from "./helper/selector";
import Product from "./components/Product";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import CompBubble from "./components/CompBubble";
import CompBubbleElement from "./components/CompBubbleElement";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import CompareButton from "./components/CompareButton";

const reorder = (list, startIndex, endIndex) => {
  // console.log('list', list)
  const result = Array.from(list);
  // console.log('result', result)
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  // console.log('result2', result)

  return result;
}

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  // console.log('sourceclone', sourceClone)
  // console.log('destination in move function', destination)
  const destClone = Array.from(destination);
  // console.log('destClone', destClone)
  const newDest = sourceClone[droppableSource.index]
  // console.log('newDest', newDest)
  sourceClone.splice(droppableSource.index, 1);
  destClone.splice(0, 1)
  destClone.push(newDest);
  // console.log('newDest2', destClone)

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  // console.log(result)

  return result;
};

const compare = [{ id: 200, name: "compare here" }, { id: 201, name: "compare here" }, { id: 203, name: "compare here" }]

export default function Application(props) {
  const [state, setState] = useState({
    products: [],
    categories: [],
    searchArray: [],
    features: [],
    searchValue: "",
    catSelected: 1,
    selected: 1,
    comparison: compare,
    mode: 'cat'

  });

  let id2List = {
    id: 'products',
    droppable: 'products',
    droppable2: 'comparison'
  }


  let getList = id => {
    return state[id2List[id]]
  }


  let onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination || destination.droppableId === 'product') {
      return;
    }
    // console.log("destinatiomn", destination)

    if (source.droppableId === destination.droppableId) {
      // console.log('source1', source)
      const products = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      // console.log('products', state.products)
      // console.log('source', source)
      let value = state.products[source.index];
      // console.log('value', value)

      if (source.droppableId === 'droppable2') {
        value = products[source.index];
      }

      setState((prev) => ({ ...prev, selected: value.id }));
    } else {
      // console.log('destination.droppableId', destination.droppableId)

      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      // console.log('destination2', destination)
      // console.log('source2', source)

      setState((prev) => ({
        ...prev,
        product: result.droppable,
        comparison: result.droppable2
      }))
    }
  };



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

  const [selectedProductIDs, setSelectedProductIDs] = useState([]);

  const addProdIDs = (id) => {
    setSelectedProductIDs((prev) => {
      // console.log('add_ID', id);
      return [...prev, id];
    });
  }

  const removeProdIDs = (id) => {
    setSelectedProductIDs((prev) => {
      // debugger;
      const index = prev.findIndex((e) => e === id);
      // console.log('remID', id);
      const prev2 = [...prev];
      prev2.splice(index, 1);
      // console.log('remPREV', prev2);
      return prev2;
    });
  }

  useEffect(() => {
    const URL1 = "/api/products";
    const URL2 = "/api/categories";
    const URL3 = "/api/features";

    Promise.all([axios.get(URL1), axios.get(URL2), axios.get(URL3)]).then(
      (all) => {
        // console.log(all);

        const [first, second, third] = all;
        // console.log(third.data);
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
  // console.log("products", state.mode, firstset);
  const productArray = firstset.map((product, index) => {
    let id = (product.id).toString();
    return (
      <Draggable key={product.id} draggableId={id} index={index}>
        {(provided) => (
          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
              index={index}

            />
          </li>
        )}

      </Draggable>
    );
  });

  const compareArray = state.comparison.map((comparison, index) => {
    let id = (comparison.id).toString();
    return (
      <Draggable key={comparison.id} draggableId={id} index={index}>
        {(provided) => (


          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
            <CompBubbleElement
              key={comparison.id}
              id={comparison.id}
              name={comparison.name}
            />

          </li>


        )}

      </Draggable>

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
        <CompareButton
          selectedIDs={selectedProductIDs}
          features= {state.features}
        />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <ul className="drag" {...provided.droppableProps} ref={provided.innerRef}>
              {provided.placeholder}
              <div className="container">
                <div className="row">{productArray}</div>
              </div>
            </ul>
          )}
        </Droppable>

        <Droppable droppableId="droppable2">
          {(provided, snapshot) => (
            <ul
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
              {provided.placeholder}
              <div className="footer">

                {compareArray}


              </div>

            </ul>

          )}


        </Droppable>
      </DragDropContext>
    </div>
  );
}