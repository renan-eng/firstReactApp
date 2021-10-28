import React from "react";
import Page from "./Page";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Page title="Não Encontrado">
      <div className="text-center">
        <h2>Ops, não conseguimos localizar essa página...</h2>
        <p className="lead text-muted">
          Sempre que quiser você pode clicar em <Link to="/">Início</Link> para começar a navegar novamente.
        </p>
      </div>
    </Page>
  );
}

export default NotFound;
