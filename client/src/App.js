import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '48',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
  headers: {
    'x-rapidapi-host': 'asos2.p.rapidapi.com',
    'x-rapidapi-key': '85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b'
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  
  
  
  fetchData = () => {
    axios.request(options) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log('reponsedata:', response.data) // The entire response from the Rails API

      console.log(response.data) // Just the message
      this.setState({
        message: JSON.stringify(response.data)
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
    );
  }
}

export default App;
