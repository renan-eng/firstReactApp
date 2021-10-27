import React, { useEffect, useContext } from "react";
import Page from "./Page";
import StateContext from "../StateContext";

function Home() {
  const appState = useContext(StateContext);

  return (
    <Page title="Seu Feed">
      <h2 className="text-center">
        Olá <strong>{appState.user.username}</strong>, seu feed está vazio.
      </h2>
      <p className="lead text-muted text-center">Seu feed exibe as últimas postagens das pessoas que você segue. Se você não tiver nenhum amigo para seguir, tudo bem; você pode usar a opção &ldquo; Pesquisar &rdquo; recurso na barra de menu superior para encontrar conteúdo escrito por pessoas com interesses semelhantes e segui-los.</p>
    </Page>
  );
}

export default Home;
