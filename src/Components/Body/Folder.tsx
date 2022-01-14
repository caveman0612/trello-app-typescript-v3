import React, { useState } from "react";
import Card from "./Card";
import InputCard from "./InputCard";

const Folder = ({ folder, setBoard, board }: any) => {
  function removeFolder(event: any) {
    const name = event.target.name;
    setBoard(() => {
      return board.filter((folder: any) => {
        return folder.title !== name;
      });
    });
  }

  return (
    <div className="Folder">
      <div className="folderTitle">
        <h1>{folder.title}</h1>
        <button onClick={removeFolder} name={folder.title}>
          +
        </button>
      </div>

      <hr></hr>
      {folder.cards.map((card: any) => {
        return (
          <Card
            card={card}
            key={card.name}
            setBoard={setBoard}
            title={folder.title}
            board={board}
          />
        );
      })}
      <InputCard setBoard={setBoard} title={folder.title} board={board} />
    </div>
  );
};

export default Folder;
