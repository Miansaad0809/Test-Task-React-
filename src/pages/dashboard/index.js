import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Chart as GoogleChart } from "react-google-charts";
import { Api } from "../../utils/Api";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  // Dashboard Page (Create a dashboard like page with an area chart +
  //   Complete the same task as task 6
  // Use this package:
  // react-google-charts^3.0.15
  //   )
  const [viewWithGoogle, setViewWithGoogle] = useState(false);
  const [population, setPopulation] = useState([]);
  useEffect(() => {
    getPopulation();
  }, []);
  const getPopulation = async () => {
    try {
      const response = await Api(
        "get",
        "https://countriesnow.space/api/v0.1/countries/population/cities",
        "population"
      );
      setPopulation(response.data.data[0]);
    } catch (ex) {
      console.log(ex);
    }
  };
  const options = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    title: {
      display: true,
      text: `${population.country} Population`,
    },
  };
  const data = {
    labels: population?.populationCounts?.map((item) => item?.year),
    datasets: [
      {
        data: population?.populationCounts?.map((item) => item.value),
        backgroundColor: "rgb(66, 133, 244)",
      },
    ],
  };
  const googleChartOptions = {
    chart: {},
  };

  let googleChartData = [];
  if (population.country)
    googleChartData = [
      ["Year", "Population"],
      ...population?.populationCounts?.map((p) => p && [p.year, p.value]),
    ];
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={viewWithGoogle}
              onChange={(e) => setViewWithGoogle(!viewWithGoogle)}
            />
          }
          label="View With Google Chart"
        />
      </FormGroup>
      <Card sx={{ width: "initial" }}>
        <CardHeader title={`${population.country} Population`} />
        <CardContent>
          {viewWithGoogle ? (
            <GoogleChart
              chartType="Bar"
              width="100%"
              height="400px"
              data={googleChartData}
              options={googleChartOptions}
            />
          ) : (
            <Bar options={options} data={data} />
          )}
        </CardContent>
      </Card>
    </>
  );
};
export default Dashboard;
