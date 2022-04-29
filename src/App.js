import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { EntriesContext } from './EntriesContext';
import DataEntry from './pages/DataEntry';
import DataView from './pages/DataView';

function App() {
  const savedSubmissions = localStorage.getItem('submissions');
  let parsedSubmissions = JSON.parse(savedSubmissions);
  if(!parsedSubmissions){
    parsedSubmissions = [];
  }
  const [entries, setEntries] = useState((parsedSubmissions))
  return (
    <div className="App">
      <EntriesContext.Provider value={{ entries, setEntries }}>
        <Routes>
          <Route path="/" element={<DataEntry />} />
          <Route path="/view" element={<DataView />} />
        </Routes>
      </EntriesContext.Provider>
    </div>
  );
}

export default App;
