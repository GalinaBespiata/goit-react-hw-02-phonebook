export function Filter({ value, onFilterChange }) {
  return (
    <>
      <label>
        <span>Find contact by name</span>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onFilterChange}
        ></input>
      </label>
    </>
  );
}
