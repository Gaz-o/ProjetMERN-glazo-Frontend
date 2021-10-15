import { useState } from "react";
import { setter } from "../../../function/function";
import Service from "../../../services";
import ChoixImagePersonnage from "./ChoixImagePersonnage";

function StatCreation(props) {
  const [Text, setText] = useState("");
  const [Choix, setChoix] = useState(0);
  const [StatTotal, setStatTotal] = useState(20);
  const [StatAgi, setStatAgi] = useState(5);
  const [StatFor, setStatFor] = useState(5);
  const [StatDef, setStatDef] = useState(5);
  const [StatPV, setStatPV] = useState(5);
  const [Nom, setNom] = useState("");

  const soumettrePersonnage = async () => {
    if (StatTotal === 0 && Nom !== "" && Text !== "") {
      let body = {
        pseudoPersonnage: Nom,
        visuel: Choix,
        stats: {
          for: StatFor,
          def: StatDef,
          agi: StatAgi,
          pv: StatPV,
          reste: StatTotal,
        },
        bio: Text,
        vie: StatPV,
        reputation: StatAgi + StatFor + StatDef + StatPV,
      };
      let creationPersonnage = await Service.postPersonnage(body);
      console.log(creationPersonnage.data.success);
      if (creationPersonnage.data.success) {
        props.recupUser();
        props.setBtnParam("");
      }
    }
  };

  const statDown = (setter, data) => {
    if (data > 0) {
      setStatTotal(StatTotal + 1);
      setter(data - 1);
    }
  };

  const statUp = (setter, data) => {
    if (StatTotal > 0) {
      setStatTotal(StatTotal - 1);
      setter(data + 1);
    }
  };

  const nomChange = (e) => {
    setNom(e.target.value);
  };

  return (
    <div className="ConteneurCreerPersonnage">
      <ChoixImagePersonnage Choix={Choix} setChoix={setChoix} />
      <div className="ConteneurStatTotal">
        <div className="ConteneurStatCreerPersonnage">
          <div className="StatCreerPersonnage">
            <p>Nom: </p>
            <input onChange={(e) => nomChange(e)}></input>
          </div>
          <div className="StatCreerPersonnage">
            <p className="StatCreer">Force: </p>
            <div className="osef" onClick={() => statDown(setStatFor, StatFor)}>
              <div className="LeftPetitChevron"></div>
            </div>
            <p className="Stat">{StatFor}</p>
            <div className="osef" onClick={() => statUp(setStatFor, StatFor)}>
              <div className="RightPetitChevron"></div>
            </div>
          </div>
          <div className="StatCreerPersonnage">
            <p className="StatCreer">Defence: </p>
            <div className="osef" onClick={() => statDown(setStatDef, StatDef)}>
              <div className="LeftPetitChevron"></div>
            </div>
            <p>{StatDef}</p>
            <div className="osef" onClick={() => statUp(setStatDef, StatDef)}>
              <div className="RightPetitChevron"></div>
            </div>
          </div>
          <div className="StatCreerPersonnage">
            <p className="StatCreer">Agilité: </p>
            <div className="osef" onClick={() => statDown(setStatAgi, StatAgi)}>
              <div className="LeftPetitChevron"></div>
            </div>
            <p>{StatAgi}</p>
            <div className="osef" onClick={() => statUp(setStatAgi, StatAgi)}>
              <div className="RightPetitChevron"></div>
            </div>
          </div>
          <div className="StatCreerPersonnage">
            <p className="StatCreer">Vie: </p>
            <div className="osef" onClick={() => statDown(setStatPV, StatPV)}>
              <div className="LeftPetitChevron"></div>
            </div>
            <p>{StatPV}</p>
            <div className="osef" onClick={() => statUp(setStatPV, StatPV)}>
              <div className="RightPetitChevron"></div>
            </div>
          </div>
        </div>
        <p className="StatTotal">{StatTotal}</p>
      </div>
      <div className="ConteneurBioCreerPersonnage">
        <p className="TitreBioCreerPersonnage">
          Desciption rapide du personnage
        </p>
        <textarea
          onChange={(e) => setter(setText, e)}
          rows="3"
          cols="50"
          className="ContenuBioCreerPersonnage"
        ></textarea>
      </div>
      <p onClick={soumettrePersonnage} className="BtnCreerPersonnage">
        Créer
      </p>
    </div>
  );
}

export default StatCreation;
