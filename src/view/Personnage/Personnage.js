import { Redirect } from "react-router";
import "./Personnage.css";
import FeuillePersonnage from "./FeuillePersonnage";
import CreationPersonnage from "./Creer";

function Personnage(props) {
  /* personnage {
        proprietaire:user, 
        pseudoPersonnage:str,
        visuel:str,
        stats{for:num, def:num, agi:num, pv:num}, 
        bio:str, 
        equipements{tete:num, torse:num, jambe:num, mainGauche:num, mainDroit:num, reputation:num, argent:num}} */

  /* Condition de redirection */
  if (props.connecter !== true) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="ImagePersonnageBackGround">
        <div className="ParcheminPersonnage">
          <div className="HautParchemin">
            <p className="BtnHautParchemin">Créer</p>
            <p className="BtnHautParchemin">Gerrer</p>
            <p className="BtnHautParchemin">congédier</p>
          </div>
          <CreationPersonnage />
          <div className="BasParchemin">
            <p className="BtnBasParchemin">Tombé au combat</p>
            <p className="BtnBasParchemin">le Dernier</p>
            <p className="BtnBasParchemin">Hall of fame personnel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personnage;
