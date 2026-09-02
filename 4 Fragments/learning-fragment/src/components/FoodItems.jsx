

const FoodItems = () =>{
  // let fooditems = []
    let fooditems = ['Dal', 'Green Vegitables', 'Roti', 'Salad', 'Milk', 'Ghee']

  return(<ul className="list-group" >{fooditems.map((item) => (
    <li key={item} className="list-group-item" >{item}</li>
  ))}</ul>
)};
  export default FoodItems;
 