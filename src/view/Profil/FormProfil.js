import { useEffect, useState } from "react";
import Service from "../../services";

function FormProfil() {
  const [User, setUser] = useState({});
  const [Pseudo, setPseudo] = useState("");
  const [Age, setAge] = useState("");
  const [Genre, setGenre] = useState("");
  const [Bio, setBio] = useState("");

  const setter = (set, e) => {
    set(e.target.value);
  };

  const recupUser = async () => {
    let result = await Service.getInfos();
    setUser(result.data.data[0]);
  };

  useEffect(() => {
    recupUser();
  }, []);

  async function btnEdition() {
    let path = "/user/edit";
    let body = { ...User };
    body = Pseudo !== "" ? { ...body, pseudo: Pseudo } : { ...body };
    body = Age !== "" ? { ...body, age: Age } : { ...body };
    body = Genre !== "" ? { ...body, genre: Genre } : { ...body };
    body = Bio !== "" ? { ...body, bio: Bio } : { ...body };
    let edition = await Service.put(path, body);
    console.log(edition, "edition 22 /FormProfil");
    recupUser();
  }

  useEffect(() => {
  }, [])
  return (
    <div className="ParcheminProfil">
      <div className="ConteneurProfil">
        <p className="TitreProfil">Cher Sponsor</p>
        <p className="ContenuProfil">
          Voici votre formulaire pour modofier les information que nous avons
          sur vous{" "}
        </p>
        <form className="Profil">
          <div className="ProfilDivInput">
            <p className="ProfilP">Votre Pseudo</p>
            <input
              className="ProfilInput"
              type="text"
              name="pseudo"
              placeholder={User.pseudo}
              value={Pseudo}
              onChange={(e) => setter(setPseudo, e)}
            ></input>
            <p className="ProfilP">Votre age</p>
            <input
              className="ProfilInput"
              type="number"
              name="age"
              placeholder={User.age}
              value={Age}
              onChange={(e) => setter(setAge, e)}
            ></input>
            <p className="ProfilP">Votre genre</p>
            <input
              className="ProfilInput"
              type="text"
              name="genre"
              placeholder={User.genre}
              value={Genre}
              onChange={(e) => setter(setGenre, e)}
            ></input>
            <p className="ProfilP">Votre Présentation</p>
            <textarea
              id="bio"
              name="bio"
              rows="5"
              cols="40"
              placeholder={User.bio}
              value={Bio}
              onChange={(e) => setter(setBio, e)}
            ></textarea>
            <p className="BtnProfilConnect" onClick={btnEdition}>
              Modification
            </p>
          </div>
        </form>
        <p className="FooterProfil">
          {" "}
          Toute l'équipe du colisé vous remerci d'avoir prix le temps de nous
          lire{" "}
        </p>
      </div>
    </div>
  );
}

export default FormProfil;
