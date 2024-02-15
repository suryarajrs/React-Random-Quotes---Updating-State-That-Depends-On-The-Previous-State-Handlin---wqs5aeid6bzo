import React, { useState } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {

  const [data,setData]=useState({});

  const handleOnclick = async()=>{

    const responce = await fetch("https://api.quotable.io/random")
    const result  = await responce.json();
    setData(result)
    console.log(data)
    

  }

    return (
      <div id="main">
        <div id="wrapper">

          <div id="quote-box">
          <div className="quote-text">
            <i>{data.content}</i>

          </div>
          <div className="quote-author" >
            <h4>{data.author}</h4>
 
          </div>

          </div>
          
          <div></div>
          
        </div>
          <button onClick={handleOnclick} id="new-quote" className="button buttons">Get Quote</button>
      </div>
    );
};

export default App;
