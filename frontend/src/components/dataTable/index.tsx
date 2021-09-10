import axios from "axios";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate, formatNumber } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeSize, setActiveSize] = useState(4);
  const [page, setPage] = useState<SalePage>({
    last: true,
    totalPages: 0,
    totalElements: 0,
    first: true,
    number: 0,
    size: 4,
  });

  const changePage = (index: number) => {
    setActivePage(index);
  };

  const changeSize = (index: number) => {
    setActiveSize(index);
  };

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/sales?page=${activePage}&size=${activeSize}&sort=date,desc`
      )
      .then((response) => {
        setPage(response.data);
      })
      .catch(() => {});
  }, [activePage, activeSize]);

  return (
    <>
      <Pagination
        page={page}
        onPageChange={changePage}
        onSizeChange={changeSize}
      />
      <div className="table-responsive-sm">
        <table className="table table-striped table-hover table align-middle table-sm">
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
    </>
  );
};

export default DataTable;
