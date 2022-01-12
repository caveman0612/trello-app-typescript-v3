import React, { useState } from "react";
import Folder from "./Folder";

const Body = ({ board, setBoard }: any) => {
  const [newFolder, setNewFolder] = useState("");

  function addNewFolder(event: any) {
    event?.preventDefault();
    setBoard((prev: any) => {
      return [...prev, { title: newFolder, cards: [] }];
    });
  }
  return (
    <div className="Body">
      {board.map((folder: any) => {
        return (
          <Folder
            folder={folder}
            board={board}
            setBoard={setBoard}
            key={folder.title}
          />
        );
      })}
      <form className="form" onSubmit={addNewFolder}>
        <input
          type="type"
          className="newFolder"
          placeholder="Add New Folder"
          value={newFolder}
          onChange={(event) => {
            setNewFolder(event?.target.value);
          }}
        />
        <input type="submit" className="newCard" />
      </form>
    </div>
  );
};

export default Body;
