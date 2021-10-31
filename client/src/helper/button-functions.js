import axios from "axios";

// Function will send comparison info to database, can be put in another file later
const sendComparison = (products) => {
  const formUrlEncoded = x => {
    return Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
  }
   
  const data = {
    user_id: 1,
    // product_ids: products.toString()
    product_ids: products
  }
  
  axios.post('/api/comparisons', formUrlEncoded(data))
  .then((data) => {
    console.log('please be okay', data)
    
  })
  .catch((error) => {
    console.log('error', error)
  })
}

export default sendComparison;