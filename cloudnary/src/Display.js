import axios from "axios";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [data, setData] = useState([]);

  const loadData = () => {
    axios.get("http://localhost:8000/product/display").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  const ans = data.map((key) => {
    return (
      <>
        {/* <tr>
          <td>{key.name}</td>
          <td>{key.brand}</td>
          <td>{key.price}</td>
          <td>{key.image}</td>
        </tr> */}
        <div
          className="food-display"
          style={{
            fontSize: "18px",
            width: "300px",
          }}
        >
          <h2>Name: {key.name}</h2>
          <h2>Price {key.price}</h2>
          <h2>Brand:{key.brand}</h2>
          <img src={key.image} alt="image" width="200px" />
        </div>
      </>
    );
  });
  return (
    <>
      <h1 style={{ justifyItems: "center", display: "grid" }}>
        This is Display Page
      </h1>

      <div>
        <div className="food-display-list">{ans}</div>
      </div>
    </>
  );
};
export default Display;
