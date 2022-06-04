import React from "react";
import rough from "roughjs";

const WhiteBoard = ({ canvasRef, ctxRef }) => {
  return (
    <canvas
      ref={canvasRef}
      className="h-70 w-100 border border-dark border-2"
    ></canvas>
  );
};

export default WhiteBoard;
