import React, { useState } from "react";
import Body from "./Components/Body/Body";
import Header from "./Components/Header";

function App() {
  interface cardsType {
    name: string;
  }

  interface folderType {
    title: string;
    cards: cardsType[];
  }

  const boardTemplate: folderType[] = [
    { title: "ToDo", cards: [{ name: "By food" }, { name: "Pick up kids" }] },
    {
      title: "Errands",
      cards: [],
    },
  ];

  const [board, setBoard] = useState(boardTemplate);

  return (
    <div className="container">
      <Header />
      <Body board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
