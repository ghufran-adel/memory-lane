import { useState } from "react";
import "./Search.scss";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        id="search"
        name="search"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
