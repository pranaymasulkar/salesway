import React from "react";
import { Chart } from "react-google-charts";
import TitleTwo from "../TitleTwo";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["Jan", 1000, 200],
  ["Feb", 1170, 400],
  ["Mar", 660, 600],
  ["Apr", 1030, 800],
  ["May", 1030, 1000],
  ["Jun", 1030, 1200],
];

export const options = {
  chart: {
    // title: "Comparison",
    // subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export default function BarChart() {
  return (
    <section className="Barchart py-5">
      <TitleTwo title="Comparison" />
      <Chart
        chartType="Bar"
        width="100%"
        height="200px"
        data={data}
        options={options}
      />
    </section>
  );
}
