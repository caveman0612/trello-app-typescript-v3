import React, { useState } from "react";
import Card from "./Card";
import InputCard from "./InputCard";

const Folder = ({ folder, setBoard, board }: any) => {
  return (
    <div className="Folder">
      <h1>{folder.title}</h1>
      <hr></hr>
      {folder.cards.map((card: any) => {
        return <Card card={card} key={card.name} />;
      })}
      <InputCard setBoard={setBoard} title={folder.title} board={board} />
    </div>
  );
};

export default Folder;
