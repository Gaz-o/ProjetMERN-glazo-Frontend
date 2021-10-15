import { useEffect, useState } from "react";
import Service from "../../services";
import "./ProfilSuppr.css";

function SupprProfil(props) {
  const [User, setUser] = useState({});

  const recupUser = async () => {
    let result = await Service.getInfos();
    setUser(result.data.data[0]);
  };

  useEffect(() => {
    recupUser();
  }, []);

  const btnSuppr = async () => {
    let body = {
      _id: User._id,
    };
    let suppr = await Service.deleteProfil(body);
    if (suppr.data.success) {
      props.setIsConnect(false);
      let logout = await Service.postLogout();
      console.log(logout);
    }
  };
  return (
    <div className="ParcheminSuppr">
      <div className="ConteneurSuppr">
        <p className="TitreSuppr">Cher Sponsor</p>
        <div className="SupprDiv">
          <p className="SupprP">Votre Pseudo</p>
          <p className="SupprP">{User.pseudo}</p>
          <p className="SupprP">Votre age</p>
          <p className="SupprP">{User.age}</p>
          <p className="SupprP">Votre genre</p>
          <p className="SupprP">{User.genre}e</p>
          <p className="SupprP">Votre Présentation</p>
          <p className="SupprP">{User.bio}</p>
        </div>
        <p className="FooterSuppr">
        <p className="BtnProfilSuppr" onClick={btnSuppr}>
            Supprimer
          </p>
        </p>
      </div>
    </div>
  );
}

export default SupprProfil;
