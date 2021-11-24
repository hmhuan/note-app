import { MdSearch } from "react-icons/md";
import "../public/css/SearchBar.css";

function SearchBar({handleSearch}) {
  return (
    
    <div className="search-bar">
      <MdSearch className="search-icon" size="1.3em" />
      <input 
      onChange={(e) => handleSearch(e.target.value)}
      type="text" 
      placeholder="Search" />
    </div>
  );
}

export default SearchBar;
