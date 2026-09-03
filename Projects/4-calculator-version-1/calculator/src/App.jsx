import styles from "./App.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer"

function App() {


  return (
    <center><div className={styles.calculator}>
      <Display />
      <ButtonContainer />
    
    </div></center>
    
  );
}

export default App;
