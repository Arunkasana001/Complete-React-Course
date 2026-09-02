import Item from './Item';

const FoodItems = () =>{
  // let fooditems = []
    let fooditems = ['Dal', 'Green Vegitables', 'Roti', 'Salad', 'Milk'
      , 'Ghee']

  return(<ul className="list-group" >{fooditems.map((item) => (
    <Item key={item}  fooditem = {item}></Item>
  ))}</ul>
)};
  export default FoodItems; 
 