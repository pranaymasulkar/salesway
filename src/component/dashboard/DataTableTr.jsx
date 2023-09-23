import React, { useState, useEffect } from "react";
import axios from "axios";
const DataTableTr = () => {
  const [tbdata, setTbdata] = useState([]);
  useEffect(() => {
    GetTdata();
  }, []);

  const GetTdata = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const row = res.data;
      console.log(row);
      setTbdata(row);
    });
  };

  return (
    <>
      {tbdata.map((item) => {
        <tr>
          <td></td>
          <td>Mark</td>
          <td>Otto</td>
          <td>mdo</td>
        </tr>;
      })}
    </>
  );
};

export default DataTableTr;
