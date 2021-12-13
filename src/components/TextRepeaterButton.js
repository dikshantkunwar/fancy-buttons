import { useState } from "react";

const TextRepeaterButton = () => {
  const [reps, setReps] = useState(1);
  const textArr = [];
  for (let i = 0; i < reps; i++) {
    textArr.push(<span key={i}>I like this text</span>)
  }

  const handleClick = () => {
    setReps(reps + 1);
  }

  return (
    <button onClick={handleClick} className="TextRepeaterButton">
      <span>{textArr}</span>
    </button>
  )
}

export default TextRepeaterButton;