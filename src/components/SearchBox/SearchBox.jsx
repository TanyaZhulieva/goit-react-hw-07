import { useDispatch, useSelector } from "react-redux";
import { getFilters, setFilter } from "../../redux/filtersSlice.js";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilters);

  return (
    <>
      <p className={css.search}>Find contacts by name</p>
      <input
        type="text"
        value={filterValue}
        onChange={(event) => dispatch(setFilter(event.target.value))}
        className={css.input}
      ></input>
    </>
  );
}