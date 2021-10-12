import combattant1 from "../../img/combattant/combattant1.jpg"
import combattant2 from "../../img/combattant/combattant2.jpg"
import combattant3 from "../../img/combattant/combattant3.jpg"
import combattant4 from "../../img/combattant/combattant4.jpg"
import combattant5 from "../../img/combattant/combattant5.jpg"
import combattant6 from "../../img/combattant/combattant6.jpg"
import "./Creer.css"

function CreationPersonnage () {
    let choixPersonnages = [
        combattant1,
        combattant2,
        combattant3,
        combattant4,
        combattant5,
        combattant6
    ];

    return (
        <div className="ConteneurCreerPersonnage">
            <div className="ContenuCreerPersonnage">
                <img className="ImageCombattantCreerPersonnage" src={choixPersonnages[1]} alt="un combattant"/>
            </div>
            <div className="ConteneurStatCreerPersonnage">
                <p className="StatPCreerPersonnage">Nom: <input></input></p>
                <p className="StatPCreerPersonnage">Force: </p>
                <p className="StatPCreerPersonnage">Defence: </p>
                <p className="StatPCreerPersonnage">Agiliter: </p>
                <p className="StatPCreerPersonnage">Vie: </p>
            </div>
            <div className="ConteneurBioCreerPersonnage">
                <p className="TitreBioCreerPersonnage">Desciption rapide du personnage</p>
                <textarea className="ContenuBioCreerPersonnage"></textarea>
            </div>
            <p className="BtnCreerPersonnage">
              Créer
            </p>
        </div>
    )
}

export default CreationPersonnage;