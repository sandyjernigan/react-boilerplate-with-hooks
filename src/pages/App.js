import React from "react";
import Routes from "./Routes";
import NavBar from "./Nav";
import "../styles/app.css";

function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
      <NavBar />

      {/* Router Controller */}
      <Routes />
    </div>
  );
}

export default App;
