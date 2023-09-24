import React, { useState, useEffect } from "react";
// import axios from "axios";
const DataTableTr = () => {
  //   const [tbdata, setTbdata] = useState([]);
  //   useEffect(() => {
  //     GetTdata();
  //   }, []);

  //   const GetTdata = () => {
  //     axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
  //       const row = res.data;
  //       console.log(row);
  //       setTbdata(row);
  //     });
  //   };

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
      {trdata &&
        trdata.map((item, index) => {
          return (
            <>
              <tr key={index}>
                <td>{item.product}</td>
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
