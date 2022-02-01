import { useState } from 'react'

function AdvokatKForma(props) {

    const [poruka, setPoruka] = useState({
        ime: '',
        prezime: '',
        email: '',
        poruka: ''
    })


    return (
        <div className="kontakt-forma-main-div">
            <h2 className="kontaktirajte-nas-h2">Kontaktirajte nas</h2>
            <div className="element">
                <label htmlFor="form-label">Ime</label>
                <input type="text" className="form-control" value={poruka.ime} onChange={e => setPoruka({ ...poruka, ime: e.target.value })} />
            </div>
            <div className="element">
                <label htmlFor="form-label">Prezime</label>
                <input type="text" className="form-control" value={poruka.prezime} onChange={e => setPoruka({ ...poruka, prezime: e.target.value })} />
            </div>
            <div className="element">
                <label htmlFor="form-label">Email</label>
                <input type="email" className="form-control" value={poruka.email} onChange={e => setPoruka({ ...poruka, email: e.target.value })} />
            </div>
            <div className="element">
                <label htmlFor="form-label">Poruka</label>
                <textarea type="text" className="form-control" value={poruka.poruka} onChange={e => setPoruka({ ...poruka, poruka: e.target.value })} />
            </div>
            <button type="button" onClick={() => props.submit(poruka)} className="btn btn-primary" id="btn_save">Sacuvaj</button>
        </div>
    );
}

export default AdvokatKForma