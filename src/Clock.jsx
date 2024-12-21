import React from "react";

const Clock = ({ time }) => {
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div style={{ fontSize: "2rem", fontFamily: "sans-serif" }}>
      {formatTime(time)}
    </div>
  );
};

export default Clock;
