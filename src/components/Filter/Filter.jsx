import css from '../Filter/Filter.module.css';

export function Filter({ value, onFilterChange }) {
  return (
    <div>
      <label>
        <span className={css.labelName}>Find contact by name</span>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onFilterChange}
        ></input>
      </label>
    </div>
  );
}
