import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: {
    categories: string[];
  };
  series: [
    {
      name: string;
      data: number[];
    }
  ];
};

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  useEffect(() => {
    axios
      .get(BASE_URL + "/sales/success-by-seller")
      .then((response) => {
        const data = response.data as SaleSuccess[];
        const myLabels = data.map((x) => x.name);
        const mySeries = data.map((x) =>
          round((100.0 * x.deals) / x.visited, 1)
        );

        setChartData({
          labels: {
            categories: myLabels,
          },
          series: [
            {
              name: "",
              data: mySeries,
            },
          ],
        });
      })
      .catch(() => {
        console.log("Erro: Tente mais tarde!");
      });
  }, []);

  return (
    <div>
      <Chart
        options={{ ...options, xaxis: chartData.labels }}
        height={240}
        series={chartData.series}
        type="bar"
      />
    </div>
  );
};

export default BarChart;
