

export default function Amount({setAmount, amount}) {
  
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Enter an amount..."
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount} 
      />
    </div>
  );
}
