import BarChart from "components/barChart";
import DataTable from "components/dataTable";
import DonutChart from "components/donutChart";

const Dashboard = () => {
  return (
    <>
      <div className="container bg-light my-3 rounded">
        <h1 className="text-secondary py-3">Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div>
          <h3 className="text-center text-secondary py-3">Todas as vendas</h3>
        </div>
        <DataTable />
      </div>
    </>
  );
};

export default Dashboard;
