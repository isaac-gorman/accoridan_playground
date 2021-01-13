import './App.css';
import Accordion from './Components/Accordion'

function App() {
  return (
    <div className="App">
      <Accordion 
        title="What is your return policy?" 
        content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />

      <Accordion 
        title="What is your return policy?" 
        content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />

      <Accordion 
        title="What is your return policy?" 
        content="
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </br>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </br>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        "
      />

    </div>
  );
}

export default App;
