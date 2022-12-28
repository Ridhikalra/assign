import "./App.css";
import Nav from "./components/Nav.js";
import React, { useState } from "react";
import CardGrid from "./components/CardGrid";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getUserData = async () => {
    setIsLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    if (response.status === 200) {
      const final = await response.json();
      setData(final.data);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Nav getUserData={getUserData} />
      {isLoading ? <div class="loader"></div> : <CardGrid users={data} />}
    </div>
  );
}

export default App;
