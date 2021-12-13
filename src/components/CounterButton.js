import { useState } from "react";

const CounterButton = () => {
  const [clickAmount, setClickAmount] = useState(0);
  return (
    <button className="CounterButton">
      You clicked me {clickAmount} amount of times
    </button>
  )
}

export default CounterButton;