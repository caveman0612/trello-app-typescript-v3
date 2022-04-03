import React, { useState } from "react";
import Folder from "./Folder";

const Body = ({ board, setBoard }: any) => {
  const [newFolder, setNewFolder] = useState("");

  function addNewFolder(event: any) {
    event?.preventDefault();
    if (
      board.some((folder: any) => {
        return folder.title === newFolder;
      })
    ) {
      alert("already have a folder with that name");
    } else {
      setBoard((prev: any) => {
        return [...prev, { title: newFolder, cards: [] }];
      });
      setNewFolder("");
    }
  }
  return (
    <div className="container d-flex">
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
