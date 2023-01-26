import './CreationSession.css'

function CreationSession(props){
    return (
        <div>
            <form>
                <div className='creation-session'>
                    <div className='T1'>
                        <div>
                            <label htmlFor='matiere'>Matière</label>
                            <input required name='matiere' id='matiere' type='text'></input>
                        </div>

                        <div>
                            <label htmlFor='type'>Type</label>
                            <input required name='type' id='type' type='text'></input>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='salle'>Salle(s)</label>
                        <input name='salle' id='salle' type='text'></input>
                    </div>

                    <div>
                        <label htmlFor='groupe'>Groupe(s)</label>
                        <input required name='groupe' id='groupe' type='text'></input>
                    </div>

                    <div>
                        <label htmlFor='intervenant'>Intervenant(s)</label>
                        <input name='intervenant' id='intervenant' type='text'></input>
                    </div>

                    <div className='T2'>
                        <div>
                            <label htmlFor='date'>Date</label>
                            <input required name='date' id='date' type='date' ></input>
                        </div>

                        <div>
                            <label htmlFor='heure_debut'>Début</label>
                            <input required name='heure_debut' id='heure_debut' type='time'></input>
                        </div>

                        <div>
                            <label htmlFor='heure_fin'>Fin</label>
                            <input required name='heure_fin' id='heure_fin' type='time'></input>
                        </div>
                    </div>
                    
                    <input type="submit" value="Créer"/>
                </div>
                
                
            </form>
        </div>
    );
}

export default CreationSession;