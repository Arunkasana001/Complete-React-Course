import ClockName from "./components/ClockName";
import Paragraph from "./components/Paragraph";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <center className="clock-conainer">
      <ClockName />
      <Paragraph></Paragraph>
      <CurrentTime /> 
    </center>
  );
}
export default App;
