import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import OptionsChart from "./OptionsChart";
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default () => {
  return (
    <div>
      <div className="w-full">
        <h3 className="my-4 text-3xl font-light">Monitoreo</h3>
        {/* <h3 className="my-4 text-2xl font-light">{new Date().toUTCString()}</h3> */}
        <OptionsChart />
      </div>

      <Line data={data} width={"100%"} height={"20px"} />
    </div>
  );
};
