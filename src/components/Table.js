import React from "react";
import "../App.css";
export const Table = ({ jsonPalavras }) => {
  return (
    <tbody>
      <tr className="trHeader">
        <th>Ranking</th>
        <th>Quantidade</th>
        <th>Palavra</th>
      </tr>
      {Object.keys(jsonPalavras)
        .sort((a, b) => jsonPalavras[b] - jsonPalavras[a])
        .map((element, index) => {
          return (
            <>
              <tr>
                <td>{index + 1}</td>
                <td>{jsonPalavras[element]}</td>
                <td>{element}</td>
              </tr>
            </>
          );
        })}
    </tbody>
  );
};
