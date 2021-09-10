import { SalePage } from "types/sale";

type Props = {
  page: SalePage;
  onPageChange: Function;
  onSizeChange: Function;
};

const Pagination = ({ page, onPageChange, onSizeChange }: Props) => {
  return (
    <div className="row d-flex">
      <nav className="d-flex justify-content-between">
        <ul className="pagination">
          <li className={`page-item ${page.first ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page.number - 1)}
            >
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.number + 1}</span>
          </li>
          <li className={`page-item ${page.last ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page.number + 1)}
            >
              Próxima
            </button>
          </li>
        </ul>
        <ul className="pagination">
          <li className={`page-item ${page.size === 4 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onSizeChange(page.size - 1)}
            >
              -
            </button>
          </li>
          <li>
            <button className="page-link">{page.size}</button>
          </li>
          <li className={`page-item ${page.size === 24 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onSizeChange(page.size + 1)}
            >
              +
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
