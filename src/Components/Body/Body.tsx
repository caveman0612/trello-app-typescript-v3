import React, { useState } from "react";
import Folder from "./Folder";

const Body = ({ board, setBoard }: any) => {
  return (
    <div className="Body">
      {board.map((folder: any) => {
        return (
          <Folder folder={folder} setBoard={setBoard} key={folder.title} />
        );
      })}
    </div>
  );
};

export default Body;
