import './Filtres.css'

function Filtres(){
    return (
        <div className="filtres">
            
            <select className="select" name="annee" id="annee-select">
                <option value="annee-1">Année 1</option>
                <option value="annee-2">Année 2</option>
                <option value="annee-3">Année 3</option>
                <option value="annee-4">Année 4</option>
                <option value="annee-5">Année 5</option>
            </select>

            <select className="select" name="cycle" id="cycle-select">
                <option value="cycle-cir">CIR</option>
                <option value="cycle-biast">BIAST</option>
                <option value="cycle-biost">BIOST</option>
                <option value="cycle-cent">CENT</option>
                <option value="cycle-cest">CEST</option>
                <option value="cycle-csi">CSI</option>
            </select>

            <select className="select" name="option" id="option-select">
                <option value="option-esp">Espagnol</option>
                <option value="option-ang">Anglais</option>
                <option value="option-all">Allemand</option>
                <option value="option-bret">Breton</option>
                <option value="option-chi">Chinois</option>
            </select>

            <button class="button-rectangle" type="button">Afficher
            </button>
            

            
        </div>
       
    );
}

export default Filtres;