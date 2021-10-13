function GerrerPersonnage(props) {
  return (
    <div className="ConteneurPersonnage">
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
          <p className="Denomination">Inventaire</p>
        </div>
      </div>
    </div>
  );
}

export default GerrerPersonnage;
