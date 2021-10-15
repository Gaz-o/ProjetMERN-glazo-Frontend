import { useEffect, useState } from "react";
import Service from "../../services";
import ComAffichage from "./ComAffichage";
import "./Fame.css";
import PostComFame from "./PostComFame";

function Fame() {
  const [Personnages, setPersonnages] = useState("");
  const [MAJ, setMAJ] = useState(0);

  const recupPersonnages = async () => {
    let famePersonnages = await Service.getPersonnages();
    setPersonnages(famePersonnages);
  };

  useEffect(() => {
    recupPersonnages();
  }, [MAJ]);

  let affiche;

  if (Personnages !== "") {
    const affichage = () => {
      return Personnages.data.data.map((personnage, key) => {
        return entre(personnage, key);
      });
    };

    function entre(data, key) {
      return (
        <div key={key} className="TableauxLigne">
          <div className="TableauAffichage">
            <div className="TableauFooter">
              <p className="FameP">{data.pseudoPersonnage}</p>
            </div>
            <div className="TableauFooter">
              <p className="FameP Bio">{data.bio}</p>
            </div>
            <div className="TableauFooter">
              <p className="FameP">{data.reputation}</p>
              <p className="FameP">{data.proprietaire}</p>
            </div>
          </div>
          <ComAffichage messages={data.messages} />
          <PostComFame idPersonnage={data._id} MAJ={MAJ} setMAJ={setMAJ}/>
        </div>
      );
    }

    affiche = affichage();
  }

  return (
    <div>
      <div className="ImageFameBackGround">
        <div className="Tableaux">{affiche}</div>
      </div>
    </div>
  );
}

export default Fame;
