const DataTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr className="text-secondary">
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-primary">
            <td>22/04/2021</td>
            <td>Anakin</td>
            <td>100</td>
            <td>43</td>
            <td>43600.00</td>
          </tr>
          <tr className="text-primary">
            <td>22/04/2021</td>
            <td>Barry Allen</td>
            <td>100</td>
            <td>67</td>
            <td>67100.00</td>
          </tr>
          <tr className="text-primary">
            <td>22/04/2021</td>
            <td>Kal-El</td>
            <td>100</td>
            <td>67</td>
            <td>67700.00</td>
          </tr>
          <tr className="text-primary">
            <td>22/04/2021</td>
            <td>Logan</td>
            <td>100</td>
            <td>45</td>
            <td>45600.00</td>
          </tr>
          <tr className="text-primary">
            <td>22/04/2021</td>
            <td>Padme</td>
            <td>100</td>
            <td>71</td>
            <td>71100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
