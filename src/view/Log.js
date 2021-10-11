import { useEffect, useState } from "react"
import "./Log.css"
import Connect from "./Log/connect";

function Connexion(props) {
    const [BtnLog, setBtnLog] = useState("Inscription");
    const [Contenu, setContenu] = useState("");
    const [Affichage, setAffichage] = useState("");

    let connecter = props.connecter

    function deconnect() {
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
    }, [connecter]);

    return (
        <div>
            <div className="ImageLogBackGround">
                <div className="ParcheminLog">
                    <div className="ConteneurLog">
                        <p className="TitreLog">Bonjour Cher Sponsor</p>
                        <p className="ContenuLog"> {Contenu} </p>
                        {connecter !== "Deconnexion" ? <p className="BtnLog" onClick={btnLog}>{BtnLog}</p> : ""}
                        {Affichage !== "Deconnexion" ? Connect(BtnLog) : deconnect()}
                        <p className="FooterLog"> Toute l'équipe du colisé vous remerci d'avoir prix le temps de nous lire </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Connexion;