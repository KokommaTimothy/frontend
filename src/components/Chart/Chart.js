import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalcontext";
import { dateFormat } from "../../utils/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes, expenses } = useGlobalContext();
  console.log(expenses)

  const data = {
    // labels: incomes.map((inc) => {
    //   const { date } = inc;
    //   return dateFormat(date);
    // }),

    // label: expenses.map((exp) => {
    //   const { date } = exp;
    //   return dateFormat(date);
    // }),

    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount, date } = income;
            return {x: date, y: amount}
          }),
        ],
        backgroundColor: "green",
        tension: 0.2,
      },

     
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount, date} = expense;
            return { x: date, y: amount}
          }),
        ],
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

export default Chart;
