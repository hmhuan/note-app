import { MdSearch } from "react-icons/md";
import { MdToggleOff, MdToggleOn } from 'react-icons/md';
import "../public/css/SearchBar.css";

function SearchBar({handleSearch, handleToggle, darkMode}) {
  return (
    <div className="search-bar">
      <MdSearch className="search-icon" size="1.3em" />
      <input 
      onChange={(e) => handleSearch(e.target.value)}
      type="text" 
      placeholder="Search" />
      {darkMode ? <MdToggleOn className="toggle-on" size='2em' onClick={handleToggle}/> 
      : <MdToggleOff className="toggle-off" size='2em'onClick={handleToggle}/>}
    </div>
  );
}

export default SearchBar;
