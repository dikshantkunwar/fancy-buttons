const AngryButton = () => {
  return (
    <button className="AngryButton">
      {/* When the threshold is not reached */} <span>Don't click me too much</span> <span className="emoji">🥺</span>
      {/* When the threshold is reached  */} <span>Rawr!</span>
    </button>
  )
}

export default AngryButton;