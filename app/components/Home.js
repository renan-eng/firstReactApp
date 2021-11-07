import React, { useEffect, useContext } from "react";
import Page from "./Page";
import StateContext from "../StateContext";
import { useImmer, useImmerReducer } from "use-immer";
import LoadingDotsIcon from "./LoadingDotsIcon";
import Axios from "axios";
import Post from "./Post";

function Home() {
  const appState = useContext(StateContext);
  const [state, setState] = useImmer({
    isLoading: true,
    feed: []
  });

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();

    async function fetchData() {
      try {
        const response = await Axios.post("/getHomeFeed", { token: appState.user.token }, { cancelToken: ourRequest.token });
        setState(draft => {
          (draft.isLoading = false), (draft.feed = response.data);
        });
      } catch (e) {
        console.log("Aconteceu um erro ao requisitar seus dados no servidor.");
      }
    }
    fetchData();
    return () => {
      ourRequest.cancel();
    };
  }, []);

  if (state.isLoading) {
    return <LoadingDotsIcon />;
  }

  return (
    <Page title="Seu Feed">
      {state.feed.length > 0 && (
        <>
          <h2 className="text-center mb-4"> Posts Recentes: </h2>
          <div className="list-group">
            {state.feed.map(post => {
              return <Post post={post} key={post._id} />;
            })}
          </div>
        </>
      )}
      {state.feed.length == 0 && (
        <>
          <h2 className="text-center">
            Olá <strong>{appState.user.username}</strong>, seu feed está vazio.
          </h2>
          <p className="lead text-muted text-center">Seu feed exibe as últimas postagens das pessoas que você segue. Se você não tiver nenhum amigo para seguir, tudo bem; você pode usar a opção &ldquo; Pesquisar &rdquo; recurso na barra de menu superior para encontrar conteúdo escrito por pessoas com interesses semelhantes e segui-los.</p>
        </>
      )}
    </Page>
  );
}

export default Home;
//File in github is home.js and not Home.js, and its causing issues with netlify
