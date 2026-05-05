export default function SearchBar({ name, setName, onSearch }) {
  return (
    <div className="search-bar d-flex">
      <input
        name="recipe"
        className="input"
        type="text"
        placeholder="Search vegan food..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
