const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-secondary">
      <div className="container">
        <p className="text-primary">
          App desenvolvido por{" "}
          <a
            href="https://github.com/apdo3939"
            target="_blank"
            rel="noreferrer"
            className="text-light"
          >
            Alexandre Pereira{" "}
          </a>
        </p>
        <p className="text-primary">
          <small>
            <strong>Dashboard vendas</strong>
            <br />
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
