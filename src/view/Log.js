import { useEffect, useState } from "react"
import Service from "../services";
import "./Log.css"
import Connect from "./Log/connect";

function Connexion(props) {
    const [Contenu, setContenu] = useState("");
    const [Affichage, setAffichage] = useState("");

    let connecter = props.connecter

    const btnLogOut = async () => {
        let path = "/user/logout"
        localStorage.removeItem("jwt")
        props.setIsConnect(false)
        let logout = await Service.post(path)
        console.log(logout);
    }

    function deconnect() {
        return (
            <form className="Log">
                <div className="LogInput">
                    <p>Merci de votre</p>
                    <p>passage</p>
                    <p className="BtnLogConnect" onClick={btnLogOut}>Deconnecter</p>
                </div>
            </form>
        )
    }

    useEffect(() => {
        if (connecter === true) {
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
                        {Affichage !== "Deconnexion" ? <Connect {...props}/> : deconnect()}
                        <p className="FooterLog"> Toute l'équipe du colisé vous remerci d'avoir prix le temps de nous lire </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connexion;