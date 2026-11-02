import React, { useState } from "react";

function App() {
  const [digits, setDigits] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (event, index) => {
    setDraggedIndex(index);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(index));
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
  };

  const handleDrop = (event, dropIndex) => {
    event.preventDefault();

    const sourceIndex = Number(event.dataTransfer.getData("text/plain"));

    if (Number.isNaN(sourceIndex) || sourceIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newDigits = [...digits];
    const [movedDigit] = newDigits.splice(sourceIndex, 1);

    newDigits.splice(dropIndex, 0, movedDigit);

    setDigits(newDigits);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Drag &amp; Drop Digits</h1>

        <p className="subtitle">
            Drag the boxes to reorder the digits 0–9.
        </p>

        <div className="digits">
          {digits.map((digit, index) => (
            <div
              key={digit}
              className={`digit ${
                draggedIndex === index ? "dragging" : ""
              } ${dragOverIndex === index ? "drag-over" : ""}`}
              draggable
              onDragStart={(event) => handleDragStart(event, index)}
              onDragOver={(event) => handleDragOver(event, index)}
              onDrop={(event) => handleDrop(event, index)}
              onDragEnd={handleDragEnd}
            >
              {digit}
            </div>
          ))}
        </div>

        <p className="tip">
          Tip: Try reordering to make{" "}
          <code>0123456789</code> or reverse it!
        </p>
      </div>
    </div>
  );
}

export default App;