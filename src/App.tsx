import React, { useState } from "react";
import Body from "./Components/Body/Body";
import Header from "./Components/Header";

function App() {
  const [board, setBoard] = useState([
    { title: "Applied", cards: [{ name: "kyle" }, { name: "jack" }] },
    {
      title: "Phase One",
      cards: [{ name: "Steven" }, { name: "Rodney" }, { name: "Debora" }],
    },
  ]);
  return (
    <div className="App">
      <Header />
      <Body board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
