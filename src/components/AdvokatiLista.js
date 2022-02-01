import { useEffect, useState } from 'react'
import axios from 'axios'
import Advokat from './Advokat'

function AdvokatiLista() {

    const [advokati, setAdvokati] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/advokat').then(res => {
            setAdvokati(res.data.data)
        });
    }, []);


    const listaAdvokata = advokati.map(advokat => (
        <Advokat key={advokat.id} advokat={advokat} />
    ))

    return (
        <div className="advokati-lista-div">
            <h1 id="naslov-advokati">Prikaz svih advokata</h1>
            {listaAdvokata}
        </div>
    );
}

export default AdvokatiLista;