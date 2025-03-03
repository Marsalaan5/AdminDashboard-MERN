import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="search-box position-relative d-flex align-items-center border rounded-pill">
        <CiSearch className="mr-2" />
        <input type="text" placeholder="Search" className="input" />
    </div>
  )
}

export default Search