import React, { useState, useEffect } from "react";
import axios from "axios";
const DataTableTr = () => {
  const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://ec2-34-227-25-226.compute-1.amazonaws.com:8000/sample_assignment_api_5/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           // neutral: neutral,
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       setData(responseData);
  //       console.log(responseData);
  //     } else {
  //       console.error("Failed to fetch data");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
    // fetchData();
    axios
      .post(
        "/http://ec2-34-227-25-226.compute-1.amazonaws.com:8000/sample_assignment_api_5/",
        {
          firstName: "trial",
          lastName: "assignment123",
        }
      )
      .then(function (response) {
        // console.log(response);
        const responseData = response.json();
        setData(responseData);
        console.log(responseData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.solid_amount}</td>
            <td>{item.unit_price}</td>
            <td>{item.ravanu}</td>
            <td>{item.rating}</td>
          </tr>
        );
      })}
    </>
  );
};

export default DataTableTr;
