import { useState } from "react";
import { Redirect } from "react-router";
import FormProfil from "./FormProfil";
import "./Profil.css";
import SupprProfil from "./SupprProfil";

function Profil(props) {
  const [BtnSuppr, setBtnSuppr] = useState("Suppression");
  const [PSuppr, setPSuppr] = useState("Cela est definitif");

  const btnSuppr = () => {
    if (BtnSuppr === "Suppression") {
      setBtnSuppr("Edition");
      setPSuppr("Pour revenir a l'")
    } else {
      setBtnSuppr("Suppression");
      setPSuppr("Cela est definitif")
    }
  };

  /* Condition de redirection */
  if (props.connecter !== true) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="ImageProfilBackGround">
        {BtnSuppr === "Suppression"? <FormProfil />:<SupprProfil {...props}/>}
        <div className="PetitCard">
          <p>{PSuppr}</p>
          <p className="BtnSuppr" onClick={btnSuppr}>
            {BtnSuppr}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profil;
