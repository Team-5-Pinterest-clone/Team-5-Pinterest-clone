import React, { useState, useContext, useEffect } from "react";
import OnePost from "./OnePost.jsx";
import { DataContext } from "../Context.js";

const SearchResult = ({ results, category, categories }) => {
  const [users, setUsers] = useState({});
  const [details, setDetails] = useState(false);
  const { data, setData, oneP, setOnep } = useContext(DataContext);

  const handleDetails = (obj, obj2) => {
    console.log("handleDetails");

    setOnep(obj);
    setUsers(obj2);
  };

  useEffect(() => {
    setOnep(null);
  }, []);

  return (
    <>
      {oneP && <OnePost one={oneP} set={setDetails} user={[]} />}

      {category && results.length == 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            //gap: "10px",
          }}
        >
          {categories.map((result, index) => (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2px",
              }}
              key={index}
              onClick={() => handleDetails(result, users)}
            >
              <div
                className="card"
                style={{
                  width: "10rem",
                  maxWidth: 200,
                  cursor: "pointer",
                }}
                key={index}
              >
                <div
                  className="card-body"
                  style={{ display: "flex", alignItems: "center" }}
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
      )}

      <div className="results-list" style={{ maxWidth: 500, margin: "0 auto" }}>
        {results.map((result, index) => (
          <table
            className="table table-sm mb-0 "
            key={index}
            style={{ maxWidth: 400 }}
          >
            <tbody style={{}}>
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
