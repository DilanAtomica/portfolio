import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import {useState} from "react";

function App() {

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

  return (
    <div className="App">
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <HomePage />
    </div>
  );
}

export default App;
