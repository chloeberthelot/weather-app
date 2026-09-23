function Fahrenheit({ value, onChange }) {
  return (
    <div className="fahrenheit">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="32"
      />
      °F
    </div>
  );
}

export default Fahrenheit;
