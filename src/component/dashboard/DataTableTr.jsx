import React, { useState, useEffect } from "react";
import axios from "axios";
const DataTableTr = () => {
  const [tbdata, setTbdata] = useState([]);

  const getData = () => {
    axios
      .get(
        `http://ec2-34-227-25-226.compute-1.amazonaws.com:8000/sample_assignment_
        api_3/`
      )
      .then((res) => {
        const row = res.data;
        setTbdata(row);
        console.log(row);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const trdata = [
    {
      product: "camera mi 360",
      solid_amount: 345,
      unit_price: "$678",
      ravanu: "$3456",
      rating: "4.5",
    },
    {
      product: "camera mi 360",
      solid_amount: 345,
      unit_price: "$678",
      ravanu: "$3456",
      rating: "4.5",
    },
    {
      product: "camera mi 360",
      solid_amount: 345,
      unit_price: "$678",
      ravanu: "$3456",
      rating: "4.5",
    },
    {
      product: "camera mi 360",
      solid_amount: 345,
      unit_price: "$678",
      ravanu: "$3456",
      rating: "4.5",
    },
  ];
  return (
    <>
      {tbdata &&
        tbdata.map((item, index) => {
          return (
            <>
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.solid_amount}</td>
                <td>{item.unit_price}</td>
                <td>{item.ravanu}</td>
                <td>{item.rating}</td>
              </tr>
            </>
          );
        })}
    </>
  );
};

export default DataTableTr;
