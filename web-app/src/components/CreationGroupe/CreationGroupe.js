import './CreationGroupe.css'

function CreationGroupe(props){
    return (
        <div>
            <div className='creation-groupe'>
                
                <div className='inputs'>
                    <div>
                        <label htmlFor='nomGroupe'>Nom du groupe</label>
                        <input name='nomGroupe' id='nomGroupe' type='text'></input>
                    </div>

                    <div className='input-eleve'>
                        <div className='Prénom'>
                            <label htmlFor='nom'>Nom</label>
                            <input name='nom' id='nom' type='text'></input>
                        </div>
                        <div>
                            <label htmlFor='prenom'>Prenom</label>
                            <input name='prenom' id='prenom' type='text'></input>
                        </div>

                        <button class="button-rectangle" type="button">AJOUTER ➤</button>

                    </div>

                </div>

                <div className='liste'>
                    <h3>Liste des élèves</h3>
                    <div className='eleves'>
                        <div className='eleve'>
                            <img src='Supprimer.png' alt='Supprimer'></img>
                            <p>NOM Prénom</p>
                        </div>
                    </div>
                </div>
                <button class="button-rectangle" type="button">Afficher</button>
            </div>
        </div>
    );
}

export default CreationGroupe;