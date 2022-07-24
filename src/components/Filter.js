import React from "react";

//filter function to control types of item being displayed
function Filter({onCategoryChange}){

return (
    <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
)
}

export default Filter
