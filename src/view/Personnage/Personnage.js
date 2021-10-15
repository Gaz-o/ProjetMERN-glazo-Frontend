import { Redirect } from "react-router";
import "./Personnage.css";
import "./Creer.css";
import FeuillePersonnage from "./VotrePersonnage/FeuillePersonnage";
import GerrerPersonnage from "./GerrerPersonnage/GerrerPersonnage";
import StatCreation from "./CreationPersonnage/StatCreation";
import { useEffect, useState } from "react";
import Service from "../../services";
import CongedierPersonnage from "./Autre/Congedier";

function Personnage(props) {
  const [Combattant, setCombattant] = useState({});
  const [BtnParam, setBtnParam] = useState("");

  const recupUser = async () => {
    let result = await Service.getPersonnage();
    setCombattant(result.data);
  };

  const btnChange = (e) => {
    if (BtnParam === e.target.innerText) {
      setBtnParam("");
    } else {
      setBtnParam(e.target.innerText);
    }
  };

  useEffect(() => {
    recupUser();
  }, []);

  if (props.connecter !== true) {
    return <Redirect to="/" />;
  }

  console.log(BtnParam);

  function affichage() {
    if (Combattant.success === true && BtnParam === "Gerrer") {
      return <GerrerPersonnage Combattant={Combattant.data} />;
    } else if (Combattant.success === true && BtnParam === "Congédier") {
      return <CongedierPersonnage Combattant={Combattant.data} recupUser={recupUser} setBtnParam={setBtnParam} />;
    } else if (Combattant.success === true) {
      return <FeuillePersonnage Combattant={Combattant.data} />;
    } else if (Combattant.success === false) {
      return <StatCreation recupUser={recupUser} setBtnParam={setBtnParam} />;
    }
  }

  return (
    <div>
      <div className="ImagePersonnageBackGround">
        <div className="ParcheminPersonnage">
          <div className="HautParchemin">
            {BtnParam === "Gerrer" ? (
              <p className="BtnHautParchemin" onClick={(e) => btnChange(e)}>
                Personnage
              </p>
            ) : (
              <p className="BtnHautParchemin" onClick={(e) => btnChange(e)}>
                Gerrer
              </p>
            )}
            {Combattant.success ? (
              <p className="BtnHautParchemin" onClick={(e) => btnChange(e)}>
                Congédier
              </p>
            ) : (
              <p className="BtnHautParchemin" onClick={(e) => btnChange(e)}>
                Créer
              </p>
            )}
          </div>
          {affichage()}
          <div className="BasParchemin">
            <p className="BtnBasParchemin" onClick={(e) => btnChange(e)}>
              Tombé au combat
            </p>
            <p className="BtnBasParchemin" onClick={(e) => btnChange(e)}>
              le Dernier
            </p>
            <p className="BtnBasParchemin" onClick={(e) => btnChange(e)}>
              Hall of fame personnel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personnage;
