import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate, formatNumber } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {
  const [page, setPage] = useState<SalePage>({
    last: true,
    totalPages: 0,
    totalElements: 0,
    first: true,
    number: 0,
  });

  useEffect(() => {
    axios
      .get(BASE_URL + "/sales?page=0&size=20&sort=date,desc")
      .then((response) => {
        setPage(response.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr className="text-secondary">
            <th>Data</th>
            <th>Vendedor</th>
            <th>Visitas</th>
            <th>Negocios</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map((item) => (
            <tr className="text-secondary" key={item.id}>
              <td>{formatLocalDate(item.date, "MM/yy")}</td>
              <td>{item.seller.name}</td>
              <td>{item.visited}</td>
              <td>{item.deals}</td>
              <td>{formatNumber(item.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
