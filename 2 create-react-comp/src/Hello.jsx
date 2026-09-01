function Hello(){
  let myName = 'Arun';
  let fullName = () =>{
return 'Arun Kasana'
  }
  // Dynamic Components'{}'  -- Using {}, we can embed any JS expression directly within JSX.This includes variables, function calls, and more.
  return <h3>
    Hello this is the future speaking. I am your master {fullName()}
  </h3>
}

export default Hello;