
function Advokat(props) {

    return (
        <div className="advokat-main-div">
            <h2>Ime: {props.advokat.ime} Prezime: {props.advokat.prezime} Email: {props.advokat.email} Kancelarija: {props.advokat.kancelarija.naziv}</h2>
        </div>
    );
}

export default Advokat;