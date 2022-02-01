import AdvokatKForma from "./AdvokatKForma";

function Kontakt() {

    function posaljiFormu(poruka) {
        alert('Korisnik: ' + poruka.ime + ' ' + poruka.prezime + ' Email: ' + poruka.email + ' Poruka: ' + poruka.poruka)
    }

    return (
        <div className="kontakt-main-div">
            <AdvokatKForma submit={posaljiFormu} />
        </div>
    );
}

export default Kontakt;