import React, { useState, useContext } from "react";
import OnePost from "./OnePost.jsx";
import { DataContext } from "../Context.js";

const SearchResult = ({ results }) => {
  const [users, setUsers] = useState({});
  const [details, setDetails] = useState(false);
  const { data, oneP, setOnep } = useContext(DataContext);

  const handleDetails = (obj, obj2) => {
    setDetails(true); // Corrected the syntax here
    setOnep(obj);
    setUsers(obj2);
  };
  console.log("aa", handleDetails);
  return (
    <>
      {details && <OnePost one={oneP} set={setDetails} user={users} />}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {results.map((result, index) => (
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
            key={index}
          >
            <div
              className="card"
              style={{ width: "18rem", maxWidth: 400, cursor: "pointer" }}
              key={index}
            >
              <div
                className="card-body"
                style={{ display: "flex", alignItems: "center" }}
                onClick={
                  result.categories && (() => handleDetails(result, users))
                }
              >
                <img
                  src={result.photo}
                  alt="hi"
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <span
                  style={{ cursor: result.categories ? "pointer" : "auto" }}
                >
                  {result.categories}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="results-list" style={{ maxWidth: 500 }}>
        {results.map((result, index) => (
          <table
            className="table table-sm mb-0 "
            key={index}
            style={{ maxWidth: 400 }}
          >
            <tbody>
              <tr>
                <th
                  scope="row"
                  style={{
                    maxWidth: "50px",
                  }}
                  onClick={
                    result.categories && (() => handleDetails(result, users))
                  }
                >
                  <span>
                    <img
                      src={result.photo}
                      alt="hi"
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }}
                    />
                    <td>{result.categories}</td>
                  </span>
                </th>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
