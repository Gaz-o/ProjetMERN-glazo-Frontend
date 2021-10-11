import { Redirect } from "react-router";
import "./Profil.css"

function Profil(props) {


    /* Condition de redirection */
    if (props.connecter !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div className="ImageProfilBackGround">
                <div className="ParcheminProfil">
                    <div className="ConteneurProfil">
                        <p className="TitreProfil">Cher Sponsor</p>
                        <p className="ContenuProfil">Voici votre formulaire pour modofier les information que nous avons sur vous </p>
                        <form className="Profil">
                            <div className="ProfilDivInput">
                                <p className="ProfilP">Votre Pseudo</p>
                                <input className="ProfilInput" type="text" name="pseudo" placeholder=""></input>
                                <p className="ProfilP">Votre age</p>
                                <input className="ProfilInput" type="number" name="age" placeholder=""></input>
                                <p className="ProfilP">Votre genre</p>
                                <input className="ProfilInput" type="text" name="genre" placeholder=""></input>
                                <p className="ProfilP">Votre Présentation</p>
                                <textarea id="story" name="story" rows="5" cols="40"></textarea>
                                <p className="BtnProfilConnect">Modification</p>
                            </div>
                        </form>
                        <p className="FooterProfil"> Toute l'équipe du colisé vous remerci d'avoir prix le temps de nous lire </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;