import { Redirect } from "react-router";
import "./Personnage.css"
import combattant1 from "../../img/combattant/combattant1.jpg"
import combattant2 from "../../img/combattant/combattant2.jpg"
import combattant3 from "../../img/combattant/combattant3.jpg"
import combattant4 from "../../img/combattant/combattant4.jpg"
import combattant5 from "../../img/combattant/combattant5.jpg"
import combattant6 from "../../img/combattant/combattant6.jpg"

function Personnage(props) {

    /* personnage {
        proprietaire:user, 
        pseudoPersonnage:str,
        visuel:str,
        stats{for:num, def:num, agi:num, pv:num}, 
        bio:str, 
        equipements{tete:num, torse:num, jambe:num, mainGauche:num, mainDroit:num, reputation:num, argent:num}} */
    let choixPersonnages = [
        combattant1,
        combattant2,
        combattant3,
        combattant4,
        combattant5,
        combattant6
    ];
    let pseudoPersonnage = "Brutus";
    let force = 15;
    let defence = 12;
    let agilite = 11;
    let pv = 20;
    let bio = "Aprés de nombreuse guerre pour l'empire romain j'ai dessidé de combatre pour moi et la gloire";
    let armeD = "Epée";
    let armeG = "Bouclier";
    let tete = "Haume d'Ares";
    let epaule = "Epaulette d'Ares";
    let torse = "Torse d'Ares";
    let jambes = "Jambes d'Ares";
    let reput = 12500;
    let argent = 340;

    function visualisationPersonnage () {
        return (
            
            <div className="ConteneurPersonnage">
                <div className="ContenuPersonnage">
                    <img className="ImageCombattant" src={choixPersonnages[1]} alt="un combattant"/>
                    <div className="ConteneurStat">
                        <p className="StatP">Nom: <span className="StatSpan">{pseudoPersonnage}</span></p>
                        <p className="StatP">Force: <span className="StatSpan">{force}</span></p>
                        <p className="StatP">Defence: <span className="StatSpan">{defence}</span></p>
                        <p className="StatP">Agiliter: <span className="StatSpan">{agilite}</span></p>
                        <p className="StatP">Vie: <span className="StatSpan">{pv}</span></p>
                    </div>
                </div>
                <div className="ConteneurBio">
                    <p className="TitreBio">Desciption rapide du personnage</p>
                    <p className="ContenuBio">{bio}</p>
                </div>
                <div className="ConteneurEquipement">
                    <div className="TitreEquipement">
                        <p className="Denomination">Equipement</p>
                        <p className="EquipementP">Main Droit:
                            <span className="EquipementSpan">{armeD}</span>
                        </p>
                        <p className="DescriptifP">Force + 15</p>
                        <p className="EquipementP">Main Gauche:
                            <span className="EquipementSpan">{armeG}</span>
                        </p>
                        <p className="DescriptifP">Défence + 10</p>
                        <p className="EquipementP">Tete:
                            <span className="EquipementSpan">{tete}</span>
                        </p>
                        <p className="DescriptifP">Défence + 10</p>
                        <p className="EquipementP">Epaule:
                            <span className="EquipementSpan">{epaule}</span>
                        </p>
                        <p className="DescriptifP">Défence + 10</p>
                        <p className="EquipementP">Torse:
                            <span className="EquipementSpan">{torse}</span>
                        </p>
                        <p className="DescriptifP">Défence + 10</p>
                        <p className="EquipementP">Jambes:
                            <span className="EquipementSpan">{jambes}</span>
                        </p>
                        <p className="DescriptifP">Défence + 10</p>
                        <p className="Denomination">Ressource</p>
                        <p className="RessourceP">Réputation:
                            <span className="RessourceSpan">{reput}</span>
                        </p>
                        <p className="RessourceP">Argent:
                            <span className="RessourceSpan">{argent}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    

    /* Condition de redirection */
    if (props.connecter !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div className="ImagePersonnageBackGround">
                <div className="ParcheminPersonnage">
                        {visualisationPersonnage()}
                </div>
            </div>
        </div>
    )
}

export default Personnage;