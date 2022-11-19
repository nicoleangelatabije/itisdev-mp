import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <span>
      <input
        type="search"
        className="search-bar"
        placeholder="Search Plate Number"
        value = {filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}

export default GlobalFilter