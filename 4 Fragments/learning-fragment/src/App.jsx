import React from "react"; // used for React-Fragments.
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
 let fooditems = ['Dal', 'Green Vegitables', 'Roti', 'Salad', 'Milk', 'Ghee']

  return (
    // Fragment also used as  '<> </>'
  // <React.Fragment>  
  //   <h1>Healthy Food</h1>
  //   <ul className="list-group">
  //   <li className="list-group-item">Dal</li>
  //   <li className="list-group-item">Roti</li>
  //   <li className="list-group-item">Salad</li>
  //   <li className="list-group-item">Milk</li>
  //   <li className="list-group-item">Green Vegitables</li>
  //   </ul></React.Fragment>

// map():- Render lists from array data, transforms array items into JSX
  <>
  <h1>Healthy Food</h1>
  <ul className="list-group" >{fooditems.map((item) => (
    <li key={item} className="list-group-item" >{item}</li>
  ))}</ul>
  </>
  )
}

export default App
