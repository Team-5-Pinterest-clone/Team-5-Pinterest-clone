import React, { useState } from "react";

const Search = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:8800/api/users/getAllPosts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const results = json.filter((post) => {
          return (
            value &&
            post &&
            post.categories &&
            post.categories.toLowerCase().includes(value)
          );
        });
        console.log(results);
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <input
        type="Search"
        placeholder="Type to search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
