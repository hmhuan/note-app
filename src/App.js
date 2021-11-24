import './App.css';
import NodeList from './components/NoteList';
import SearchBar from './components/SearchBar';
import {useState} from 'react';

function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="App">
      <SearchBar handleSearch={setSearchText}/>
      <NodeList searchText={searchText}/>
    </div>
  );
}

export default App;
