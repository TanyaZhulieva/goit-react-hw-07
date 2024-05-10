import { useDispatch, useSelector } from "react-redux";
import { getFilters, setFilter } from "../../redux/filtersSlice.js";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilters);

  const handleChange = (event) => dispatch(setFilter(event.target.value))

  return (
    <>
      <p className={css.search}>Find contacts by name</p>
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        className={css.input}
      ></input>
    </>
  );
}