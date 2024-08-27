import { useState } from "react";

const userList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function App() {
  const [index, setIndex] = useState(0);
  const handlePlus = () => {
    setIndex(index + 1);
  };
  const handleMinus = () => {
    setIndex(index - 1);
  };
  return (
    <div className="text-center">
      <button onClick={handlePlus}>nemeh</button>
      <p>{index}</p>
      <button onClick={handleMinus}>hasah</button>
    </div>
  );
}
