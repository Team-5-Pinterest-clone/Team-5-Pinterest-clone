import React from "react";

const SearchResult = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, index) => {
        return (
          <div key={index}>
            {result.categories} <img src={result.photo} alt="hi" />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
