import { useEffect, useState } from "react"
import "./Log.css"

function Connexion(props) {
    const [BtnLog, setBtnLog] = useState("Inscription");
    const [Contenu, setContenu] = useState("");
    const [Affichage, setAffichage]  = useState("");

    let connecter = props.connecter

    function connect (isLog) {
        if (isLog === "Inscription") {
            return (
                <form className="Log">
                    <div className="LogInput">
                        <p>Votre address mail</p>
                        <input type="email" name="mail" placeholder=""></input>
                        <p>Votre code secret</p>
                        <input type="password" name="password" placeholder=""></input>
                        <p className="BtnLogConnect">Connecter</p>
                    </div>
                </form>
            )
        } else {
            return (
                <form className="Log">
                    <div className="LogInput">
                        <p>Votre Pseudo</p>
                        <input type="text" name="pseudo" placeholder=""></input>
                        <p>Votre address mail</p>
                        <input type="email" name="mail" placeholder=""></input>
                        <p>Votre code secret</p>
                        <input type="password" name="password" placeholder=""></input>
                        <p className="BtnLogConnect">Création</p>
                    </div>
                </form>
            )
        }
    }

    function deconnect () {
        return (
            <form className="Log">
                <div className="LogInput">
                    <p>Merci de votre</p>
                    <p>passage</p>
                    <p className="BtnLogConnect">Deconnecter</p>
                </div>
            </form>
        )
    }

    const btnLog = () => {
        if (BtnLog === "Inscription") {
            setBtnLog("Connexion");
        } else {
            setBtnLog("Inscription");

        }
      };

    useEffect(() => {
        if (connecter === "Deconnexion") {
            setAffichage("Deconnexion");
            setContenu("J'espere que les Dieux etait avec vous aujourd'hui");
        } else {
            setAffichage("Connexion");
            setContenu(`Si vous souhaiter créer un nouveau Sponsor 
        prennez une autre pierre`);
        }
    }, []);

    return (
        <div> 
            <div className="ImageLogBackGround">
                <div className="ParcheminLog">
                    <div className="ConteneurLog">
                        <p className="TitreLog">Bonjour Cher Sponsor</p>
                        <p className="ContenuLog"> {Contenu} </p>
                        {connecter !== "Deconnexion"? <a className="BtnLog" onClick={btnLog}>{BtnLog}</a>: ""}
                        {Affichage !== "Deconnexion"? connect(BtnLog): deconnect()}
                        <p className="FooterLog"> Toute l'équipe du colisé vous remerci d'avoir prix le temps de nous lire </p>
                    </div>
                </div>
            </div>
        </div>
    )

  }
  
  export default Connexion;