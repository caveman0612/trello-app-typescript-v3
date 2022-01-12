import React, { useState } from "react";

const InputCard = ({ setBoard, title, board }: any) => {
  function updateValue(event: any) {
    const value = event.target.value;
    setCurrentValue(value);
  }

  const [currentValue, setCurrentValue] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    const value = event.target[0].value;
    setBoard((prev: any) => {
      return board.map((folder: any, idx: number) => {
        if (folder.title === title) {
          return {
            ...folder,
            cards: [...prev[idx].cards, { name: value }],
          };
        } else return { ...folder };
      });
    });
    setCurrentValue("");
  }

  return (
    <div className="InputCard">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Card"
          value={currentValue}
          onChange={updateValue}
        />
        <input type="submit" className="newCard" />
      </form>
    </div>
  );
};

export default InputCard;
