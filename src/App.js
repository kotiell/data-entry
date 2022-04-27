import {Routes,Route} from 'react-router-dom';
import './App.css';

import DataEntry from './pages/DataEntry';
import DataView from './pages/DataView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DataEntry />} />
        <Route path="/view" element={<DataView/>} />
      </Routes>
    </div>
  );
}

export default App;
