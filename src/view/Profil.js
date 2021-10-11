import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import Service from "../services";
import "./Profil.css";

function Profil(props) {
  
  const [User, setUser] = useState({})
  
  const recupUser = async () => {
    let result = await Service.getInfos();
    setUser(result.data.data[0]);
  };
  
  useEffect(() => {
    recupUser();
  }, []); 
  
  const [Pseudo, setPseudo] = useState("");
  const [Age, setAge] = useState("");
  const [Genre, setGenre] = useState("");
  const [Bio, setBio] = useState("");

  const setter = (set, e) => {
    set(e.target.value);
  }

  const btnEdition = async () => {
    let path = "/user/edit"
    let body = {
        _id:User._id,
        pseudo:Pseudo,
        age:Age,
        genre:Genre,
        bio:Bio
    }
    let edition = await Service.put(path, body)
    console.log(edition);
  }

  /* Condition de redirection */
  if (props.connecter !== true) {
    return <Redirect to="/" />;
  }

  console.log(User);

  return (
    <div>
      <div className="ImageProfilBackGround">
        <div className="ParcheminProfil">
          <div className="ConteneurProfil">
            <p className="TitreProfil">Cher Sponsor</p>
            <p className="ContenuProfil">
              Voici votre formulaire pour modofier les information que nous
              avons sur vous{" "}
            </p>
            <form className="Profil">
              <div className="ProfilDivInput">
                <p className="ProfilP">Votre Pseudo</p>
                <input className="ProfilInput" type="text" name="pseudo" value={Pseudo} onChange={(e) => setter(setPseudo, e)}></input>
                <p className="ProfilP">Votre age</p>
                <input className="ProfilInput" type="number" name="age" value={Age} onChange={(e) => setter(setAge, e)}></input>
                <p className="ProfilP">Votre genre</p>
                <input className="ProfilInput" type="text" name="genre" value={Genre} onChange={(e) => setter(setGenre, e)}></input>
                <p className="ProfilP">Votre Présentation</p>
                <textarea id="bio" name="bio" rows="5" cols="40" value={Bio} onChange={(e) => setter(setBio, e)}></textarea>
                <p className="BtnProfilConnect" onClick={btnEdition}>Modification</p>
              </div>
            </form>
            <p className="FooterProfil">
              {" "}
              Toute l'équipe du colisé vous remerci d'avoir prix le temps de
              nous lire{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
