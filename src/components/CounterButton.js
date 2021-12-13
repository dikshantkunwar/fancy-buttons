import { useState } from "react";

const CounterButton = () => {
  const [clickAmount, setClickAmount] = useState(0);

  const handleClick = () => { setClickAmount(clickAmount++)}
  return (
    <button onClick={handleClick} className="CounterButton">
      You clicked me {clickAmount} amount of times
    </button>
  )
}

export default CounterButton;