import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
 

  return (
    // Fragment also used as  '<> </>'
  <React.Fragment>  
    <h1>Healthy Food</h1>
    <ul className="list-group">
    <li className="list-group-item">Dal</li>
    <li className="list-group-item">Roti</li>
    <li className="list-group-item">Salad</li>
    <li className="list-group-item">Milk</li>
    <li className="list-group-item">Green Vegitables</li>
    </ul></React.Fragment>
  )
}

export default App
