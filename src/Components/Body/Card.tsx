import React, { useState } from "react";

const Card = ({ card }: any) => {
  return (
    <div className="Card">
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
