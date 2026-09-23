function Celsius({ value, onChange }) {
  return (
    <div className="celsius">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="0"
      />
      °C
      {value >= 100 && <p>L'eau bout !</p>}
    </div>
  );
}

export default Celsius;
