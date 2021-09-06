import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  const mockData = {
    labels: {
      categories: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1],
      },
    ],
  };

  return (
    <div>
      <Chart
        options={{ ...options, xaxis: mockData.labels }}
        height={240}
        series={mockData.series}
        type="bar"
      />
    </div>
  );
};

export default BarChart;