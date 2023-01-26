import './CreationGroupe.css'

function CreationGroupe(props){
    return (
        <div>
            <div className='creation-groupe'>
                
                <div className='T1'>
                    <div>
                        <label htmlFor='nomGroupe'>Nom du groupe</label>
                        <input name='nomGroupe' id='nomGroupe' type='text'></input>
                    </div>

                    <div className='T2'>
                        <form>
                            <div>
                                <label htmlFor='nom'>Nom</label>
                                <input name='nom' id='nom' type='text'></input>
                            </div>
                            <div>
                                <label htmlFor='prenom'>Prenom</label>
                                <input name='prenom' id='prenom' type='text'></input>
                            </div>

                            <input type='submit' value='AJOUTER ➤'></input>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default CreationGroupe;