import { useState } from "react";
import { Table } from "./components/Table";
import "./App.css";

function App() {
  const [state, setState] = useState({ texto: "", array: [] });
  const [json, setJson] = useState();
  const contarPalavras = (array) => {
    var jsonPalavras = {};

    array.map((element) => {
      if (jsonPalavras.hasOwnProperty(element)) {
        jsonPalavras[element] += 1;
      } else if (element === "") {
      } else {
        jsonPalavras[element] = 1;
      }
    });
    return setJson(jsonPalavras);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Word Counting</h1>
      <textarea
        className="textarea"
        maxLength="2048"
        rows="10"
        cols="50"
        value={state.texto}
        onChange={(e) =>
          setState({
            array: e.target.value.toLocaleLowerCase().split(/[ ,.;]/),
            texto: e.target.value,
          })
        }
      />
      <button onClick={() => contarPalavras(state.array)}>
        Contar palavras
      </button>
      {json ? <Table jsonPalavras={json}></Table> : null}
    </div>
  );
}

export default App;
