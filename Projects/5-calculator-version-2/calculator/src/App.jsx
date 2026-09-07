import styles from "./App.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer"
import { useState } from "react";

function App() {
const [calVal, setCalVal] = useState("");
//  const onButtonClick = (event) => console.log(event);
 

  return (
    <center><div className={styles.calculator}>
      <Display displayValue = {calVal}> </Display>
      <ButtonContainer setCalVal={setCalVal} />
    
    </div></center>
    
  );
}

export default App;
