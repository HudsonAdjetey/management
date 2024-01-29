import React from "react";

const ClassCard = () => {
  return (
    <div>
      <span>{food}</span>

      <div className="btn">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ClassCard;
