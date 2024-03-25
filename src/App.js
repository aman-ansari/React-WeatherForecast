import React from "react";
import Search from "./Components/Search/Search";
import Temperature from "./Components/Temperature/Temperature";
import FutureHighlights from "./Components/FutureHighlights/FutureHighlights";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="site-content" style={{height: "100vh"}}>
    <Search />
    <div className="forecast-table">
      <div className="container">
        <div className="forecast-container">
          <Temperature />
          <FutureHighlights />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
