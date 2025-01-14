import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function Kategoria() {
    const { receptLista } = useContext(ApiContext);


    return (
        <div>
            {receptLista.map((receptek, key) => {
                return (
                    <option value={receptek.receptkategoria[0].nev} key={key}>
                        {receptek.receptkategoria[0].nev}
                    </option>
                );
            })}
        </div>
    );
}
export default Kategoria;