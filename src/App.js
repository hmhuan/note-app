import "./App.css";
import NodeList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const switchToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark-mode" : "white-mode"}>
      <div className="App">
        <SearchBar handleSearch={setSearchText}
          handleToggle={switchToggle}
          darkMode={darkMode}/>
        <NodeList searchText={searchText} />
      </div>
    </div>
  );
}

export default App;
