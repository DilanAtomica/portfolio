import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import {useState} from "react";

function App() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

  return (
    <div className="App" id={!darkMode && "light"}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <HomePage darkMode={darkMode} />
    </div>
  );
}

export default App;
