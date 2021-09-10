import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container flex-grow-1 bg-light rounded my-3">
      <div className="jumbotron">
        <h1 className="display-4 my-3">Vendas</h1>
        <p className="lead mb-3">
          Analise o desempenho das suas vendas por diferentes perspectivas
        </p>
        <hr />
        <p className="mt-5">
          Esta aplicação consiste em exibir um dashboard a partir de dados
          fornecidos por um back end construído com Spring Boot.
        </p>
        <Link to="/dashboard" className="btn btn-secondary btn-lg mt-3 mb-5">
          Acessar o dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
