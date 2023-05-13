import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import route from './router'
import React from 'react';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            route.map((el) => (
              <React.Fragment key={el.path}>
                <Route path={`${el.path}`} element={el.component} />
              </React.Fragment>
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
