import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";


function SorReceptek(props) {
    const { receptLista, setReceptLista } = useContext(ApiContext);

    function kattintas(event) {
        console.log(props.receptek);
    }

    return (
        <tr onClick={kattintas}>
            <td scope="row"></td>
            <td>{props.receptek.nev}</td>
            <td>
                <img src={props.receptek.kep_eleresi_ut} alt={props.receptek.nev} height="100" />
            </td>
            <td>{props.receptek.leiras}</td>
            <td>{props.receptek.receptkategoria[0].nev}</td>
        </tr>
    );
}