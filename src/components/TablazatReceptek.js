import React, { useContext, useState } from "react"
import SorRecept from "./SorReceptek";
import { ApiContext } from "../contexts/ApiContext";


function TablazatReceptek() {
    const { receptLista } = useContext(ApiContext);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Név</th>
              <th scope="col">Kép</th>
              <th scope="col">Leírás</th>
              <th scope="col">Kategória</th>
            </tr>
          </thead>
          <tbody>
            {receptLista.map((receptek, key) => (
              <SorRecept key={key} receptkategoria={receptek.receptkategoria} receptek={receptek} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  export default TablazatReceptek;