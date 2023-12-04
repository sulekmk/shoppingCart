/** @format */

import React from "react";

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
      <header className="App-header">
        <h1>SMK Shopping Cart</h1>
        {/* <div
          class="nav-sprite nav-progressive-attribute"
          id="nav-packard-glow-loc-icon"></div>
        <div id="glow-ingress-block">
          <span
            class="nav-line-1 nav-progressive-content"
            id="glow-ingress-line1">
            Delivering to San Jose 95132
          </span>
          <span
            class="nav-line-2 nav-progressive-content"
            id="glow-ingress-line2"></span>
        </div> */}

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for SMK Products..."
            value={searchCourse}
            onChange={courseSearchUserFunction}
          />
            </div>
        </header>
        
    );
}

export default SearchComponent;
