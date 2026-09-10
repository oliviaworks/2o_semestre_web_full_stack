import ListaLugares from "./ListaLugares"
import { lugaresMock } from "../data/lugaresMock"

function teste(){
    return (
        <>
            <p>Testandoo</p>
            <ListaLugares lugares={lugaresMock} />
        </>
    )
}

export default teste