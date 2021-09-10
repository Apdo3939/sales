import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
};

const DonutChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  const options = {
    legend: {
      show: true,
    },
  };

  useEffect(() => {
    axios
      .get(BASE_URL + "/sales/amount-by-seller")
      .then((response) => {
        const data = response.data as SaleSum[];
        const myLabels = data.map((x) => x.name);
        const mySeries = data.map((x) => x.sum);
        setChartData({ labels: myLabels, series: mySeries });
      })
      .catch(() => {
        console.log("Erro: Tente mais tarde!");
      });
  }, []);

  return (
    <div>
      <Chart
        options={{ ...options, labels: chartData.labels }}
        series={chartData.series}
        type="donut"
        height="240"
      />
    </div>
  );
};

export default DonutChart;
