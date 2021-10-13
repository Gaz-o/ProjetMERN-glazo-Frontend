import { Redirect } from "react-router";
import "./Personnage.css";
import FeuillePersonnage from "./VotrePersonnage/FeuillePersonnage";
import CreationPersonnage from "./CreationPersonnage/CreationPersonnage";
import { useEffect, useState } from "react";
import Service from "../../services";

function Personnage(props) {
  const [Combattant, setCombattant] = useState({});

  const recupUser = async () => {
    let result = await Service.getPersonnage();
    setCombattant(result.data);
  };

  useEffect(() => {
    recupUser();
  }, []);

  if (props.connecter !== true) {
    return <Redirect to="/" />;
  }
  
  return (
    <div>
      <div className="ImagePersonnageBackGround">
        <div className="ParcheminPersonnage">
          <div className="HautParchemin">
            <p className="BtnHautParchemin">Gerrer</p>
            {Combattant.success ? (
              <p className="BtnHautParchemin">congédier</p>
            ) : (
              <p className="BtnHautParchemin">Créer</p>
            )}
          </div>
          {Combattant.success ? (
            <FeuillePersonnage Combattant={Combattant.data} />
          ) : (
            <CreationPersonnage />
          )}
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
