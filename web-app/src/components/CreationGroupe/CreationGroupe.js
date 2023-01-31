import './CreationGroupe.css'

function CreationGroupe(props){
    const eleves = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
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
                        {eleves.map((eleve,index) =>
                            <div className='eleve' id={index}>
                                <a href='#'><img src='Supprimer.png' alt='Supprimer'></img></a>
                                <p>NOM Prénom</p>
                            </div>
                        )}
                    </div>
                </div>
                <button class="button-rectangle" type="button">Créer</button>
            </div>
        </div>
    );
}

export default CreationGroupe;