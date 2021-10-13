import combattant1 from "../../../img/combattant/combattant1.jpg";
import combattant2 from "../../../img/combattant/combattant2.jpg";
import combattant3 from "../../../img/combattant/combattant3.jpg";
import combattant4 from "../../../img/combattant/combattant4.jpg";
import combattant5 from "../../../img/combattant/combattant5.jpg";
import combattant6 from "../../../img/combattant/combattant6.jpg";
import Service from "../../../services";

function CongedierPersonnage(props) {

  let choixPersonnages = [
    combattant1,
    combattant2,
    combattant3,
    combattant4,
    combattant5,
    combattant6,
  ];

  const btnCongedier = async () => {
    let body = {
        proprietaire: props.Combattant.proprietaire,
      };
      let congedier = await Service.congedierPersonnage(body);
      if (congedier.data.success) {
        props.recupUser()
        props.setBtnParam("")
      }
  }

  return (
    <div className="ConteneurPersonnage">
      <div className="ContenuPersonnage">
        <img
          className="ImageCombattant"
          src={choixPersonnages[props.Combattant.visuel]}
          alt="un combattant"
        />
        <div className="ConteneurStat">
          <p className="StatP">
            Nom:{" "}
            <span className="StatSpan">
              {props.Combattant.pseudoPersonnage}
            </span>
          </p>
          <p className="StatP">
            Force:{" "}
            <span className="StatSpan">{props.Combattant.stats.for}</span>
          </p>
          <p className="StatP">
            Defence:{" "}
            <span className="StatSpan">{props.Combattant.stats.def}</span>
          </p>
          <p className="StatP">
            Agiliter:{" "}
            <span className="StatSpan">{props.Combattant.stats.agi}</span>
          </p>
          <p className="StatP">
            Vie: <span className="StatSpan">{props.Combattant.stats.pv}</span>
          </p>
        </div>
      </div>
      <div className="ConteneurBio">
        <p className="TitreBio">Desciption rapide du personnage</p>
        <p className="ContenuBio">{props.Combattant.bio}</p>
      </div>
      <div className="ConteneurEquipement">
        <div className="TitreEquipement">
          <p className="Denomination">Equipement</p>
          <p className="EquipementP">
            Main Droit:
            <span className="EquipementSpan">{props.Combattant.armeD}</span>
          </p>
          <p className="DescriptifP"></p>
          <p className="EquipementP">
            Main Gauche:
            <span className="EquipementSpan">{props.Combattant.armeG}</span>
          </p>
          <p className="DescriptifP"></p>
          <p className="EquipementP">
            Tete:
            <span className="EquipementSpan">{props.Combattant.tete}</span>
          </p>
          <p className="DescriptifP"></p>
          <p className="EquipementP">
            Epaule:
            <span className="EquipementSpan">{props.Combattant.epaule}</span>
          </p>
          <p className="DescriptifP"></p>
          <p className="EquipementP">
            Torse:
            <span className="EquipementSpan">{props.Combattant.torse}</span>
          </p>
          <p className="DescriptifP"></p>
          <p className="EquipementP">
            Jambes:
            <span className="EquipementSpan">{props.Combattant.jambes}</span>
          </p>
          <p className="DescriptifP"></p>
          <p className="Denomination">Ressource</p>
          <p className="RessourceP">
            Réputation:
            <span className="RessourceSpan">{props.Combattant.reputation}</span>
          </p>
          <p className="RessourceP">
            Argent:
            <span className="RessourceSpan">{props.Combattant.argent}</span>
          </p>
        </div>
      </div>
      <p className="BtnCongedier" onClick={btnCongedier} >Congedier</p>
    </div>
  );
}

export default CongedierPersonnage;
