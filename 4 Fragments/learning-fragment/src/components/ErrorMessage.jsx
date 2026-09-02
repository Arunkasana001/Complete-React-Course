
const ErrorMessage =  () =>{
    let fooditems = ['Dal', 'Green Vegitables', 'Roti', 'Salad', 'Milk', 'Ghee']
  return<>{fooditems.length ===0 &&  <h3>I am still Hungry.</h3> }
  </>
}

export default ErrorMessage;