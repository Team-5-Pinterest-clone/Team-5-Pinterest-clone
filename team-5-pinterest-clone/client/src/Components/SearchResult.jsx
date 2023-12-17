import React from "react";

const SearchResult = ({ results }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {results.map((result, index) => {
          return (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <div
                  className="card"
                  style={{ width: "18rem", maxWidth: 400 }}
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
                    <span>{result.categories}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="results-list" style={{ maxWidth: 500 }}>
        {results.map((result, index) => {
          return (
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
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
