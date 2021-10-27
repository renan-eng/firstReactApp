import React from "react";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
        <p>
          <Link to="/" className="mx-1">
            Início
          </Link>{" "}
          |{" "}
          <Link className="mx-1" to="/about-us">
            Sobre Nós
          </Link>{" "}
          |{" "}
          <Link className="mx-1" to="/terms">
            Termos
          </Link>
        </p>
        <p className="m-0">
          Copyright &copy; 2021{" "}
          <a href="/" className="text-muted">
            EscrevaAgora
          </a>
          . Todos os direitos reservados.
        </p>
      </footer>
  )
}

export default Footer