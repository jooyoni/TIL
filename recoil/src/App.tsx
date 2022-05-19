import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import List from './Routes/List';


interface IDataProps{
  todo:string
}
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
