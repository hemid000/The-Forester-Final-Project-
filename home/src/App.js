import React, { useState, useEffect } from "react";
import './App.scss';
import { Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import route from "./router";

function App() {
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
          <HashLoader style={{ height: '100vh', width: '100%', position: 'fixed', backgroundColor: 'white', zIndex: '1000' }}
            color='brown'
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <Routes>
            {route.map((el) => (
              <React.Fragment key={el.path}>
                <Route path={`${el.path}`} element={el.component} />
              </React.Fragment>
            ))}
          </Routes>
      }
    </div>
  );
}

export default App;
