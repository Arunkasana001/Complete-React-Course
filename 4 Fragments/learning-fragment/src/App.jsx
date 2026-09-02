import React from "react"; // used for React-Fragments.
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
// Conditional Rendering:- Displaying content on certain conditions,  Methods- .if-else statement .Ternary operators .Logical operators

    let fooditems = [];
  
//  let fooditems = ['Dal', 'Green Vegitables', 'Roti', 'Salad', 'Milk', 'Ghee']

// By using if-else
//  if(fooditems.length === 0){
//   return <h3>I am still Hungry.</h3>
//  }

// let emptyMessage = fooditems.length ===0 ?  <h3>I am still Hungry.</h3> : null

  return (
    <>
  <h1>Healthy Food</h1>
   {/* By using Ternary Operators */}
  {/* {emptyMessage} */}

  {/* By using logical operators */}
{fooditems.length ===0 &&  <h3>I am still Hungry.</h3> }

  <ul className="list-group" >{fooditems.map((item) => (
    <li key={item} className="list-group-item" >{item}</li>
  ))}</ul>
  </>
    //React-Fragment also used as  '<> </>'
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
  // <>
  // <h1>Healthy Food</h1>
  // <ul className="list-group" >{fooditems.map((item) => (
  //   <li key={item} className="list-group-item" >{item}</li>
  // ))}</ul>
  // </>



   


  )
}

export default App
