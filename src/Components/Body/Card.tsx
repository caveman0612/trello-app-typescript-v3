import React, { useState } from "react";

const Card = ({ card, board, setBoard, title }: any) => {
  function removeCardFromFolder(event: any) {
    const targetValue = event.target.name;
    setBoard((prev: any) => {
      return board.map((folder: any, idx: number) => {
        if (folder.title === title) {
          return {
            title: title,
            cards: prev[idx].cards.filter((item: any) => {
              return item.name !== targetValue;
            }),
          };
        } else {
          return { ...prev[idx] };
        }
      });
    });
  }

  return (
    <div className="Card">
      <p>{card.name}</p>
      <button onClick={removeCardFromFolder} name={card.name}>
        +
      </button>
    </div>
  );
};

export default Card;
