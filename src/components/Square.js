import { useState } from "react";

export default function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(position);

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// export default Square;
