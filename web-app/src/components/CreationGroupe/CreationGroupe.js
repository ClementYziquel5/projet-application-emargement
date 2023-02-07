import { useState } from "react";
import './CreationGroupe.css'
import React from 'react';

function CreationGroupe(props){

    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [etudiants, setEtudiants] = useState([]);

    function handleNom(e) {
        setNom(e.target.value);
        console.log(e.target.value);
    }

    function handlePrenom(e) {
        setPrenom(e.target.value);
        console.log(e.target.value);
    }

    function handleAddEtudiant() {
        setEtudiants([...etudiants, {nom, prenom}]);
        setNom('');
        setPrenom('');
    }
    

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
                            <input name='nom' id='nom' type='text' value={nom} onChange={handleNom}/>
                        </div>
                        <div>
                            <label htmlFor='prenom'>Prenom</label>
                            <input name='prenom' id='prenom' type='text' value={prenom} onChange={handlePrenom}/>
                        </div>

                        <button class="button-rectangle" type="button" onClick={handleAddEtudiant}>AJOUTER ➤</button>

                    </div>
                </div>

                <div className='liste'>
                    <h3>Liste des élèves</h3>
                    {etudiants.map((etudiant, index) => (
                        <div key={index}>
                            {etudiant.nom} {etudiant.prenom}
                        </div>
                    ))}
                </div>
                <button class="button-rectangle" type="button">Créer</button>
            </div>
        </div>
    );
}

export default CreationGroupe;