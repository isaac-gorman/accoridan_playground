import './App.css';
import Accordion from './Components/Accordion'
import Test from "./Components/Test";
import Other from "./Components/Other";

function App() {
  return (
    <div className="App">
    <div style={{ height: "0px", width: "100vw", border: "0.5px solid black" }} />
      <Accordion title="About" content={<Test/>} />
      <Accordion title="Projects" content={<Other/>} />
    </div>
  );
}

export default App;
