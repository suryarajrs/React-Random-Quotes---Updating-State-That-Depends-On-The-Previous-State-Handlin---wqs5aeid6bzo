import React, { useEffect, useState } from "react";
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

  const [data, setData] = useState([]);

  

    const fetchData = async()=>{


      const responce = await fetch("https://api.quotable.io/random")
      const result = await responce.json();
      setData([result])
      console.log(data)

    }



  

  useEffect(() =>{
  
    fetchData()
  },[])

  return (
    <div id="main">
      <div id="wrapper">

      


            <div  id="quote-box">

          <div className="quote-text">
            <i>{data[0]?.content}</i>
          </div>


          <div className="quote-author" >
            <i>{data[0]?.author}</i>

          </div>

        </div>
          
        

      </div>
      <button onClick={fetchData} id="new-quote" className="buttons button">Get Quotes</button>
    </div>
  );
};

export default App;
