import styles from "./App.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer"
import { useState } from "react";

function App() {
const [calVal, setCalVal] = useState("");
 const onButtonClick = (buttonText) => {
  if(buttonText === "C"){
   setCalVal("");
  }else if(buttonText === "="){

  }else{
    const newDisplayValue = calVal + buttonText;
    setCalVal(newDisplayValue);
  }
 };
 

  return (
    <center><div className={styles.calculator}>
      <Display displayValue = {calVal}> </Display>
      <ButtonContainer onButtonClick={onButtonClick} />
    
    </div></center>
    
  );
}

export default App;
