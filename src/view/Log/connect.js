import { useState } from "react";
import Service from "../../services";

function Connect (props) {
    const [Pseudo, setPseudo] = useState("");
    const [Mail, setMail] = useState("");
    const [Password, setPassword] = useState("");
    const [BtnLog, setBtnLog] = useState("Inscription");

    let connecter = props.connecter
    let setIsConnect = props.setIsConnect

    const setter = (set, e) => {
        set(e.target.value);
    }

    const btnCreation = async () => {
        let path = "/user/add"
        let body = {
            pseudo:Pseudo,
            mail:Mail,
            password:Password
        }
        let creation = await Service.post(path, body)
        console.log(creation);
    }

    const btnConnecter = async () => {
        let path = "/user/login"
        let body = {
            mail:Mail,
            password:Password
        }
        try {
            let isConnecter = await Service.post(path, body)
            console.log(isConnecter.data);
            localStorage.setItem("jwt", isConnecter.data.token)
            setIsConnect(isConnecter.data.success)
            setPseudo("");
            setMail("");
            setPassword("");
        } catch (err) {
            console.log(err);
        }
    }
    
    const btnLog = () => {
        if (BtnLog === "Inscription") {
            setBtnLog("Connexion");
            setPseudo("");
            setMail("");
            setPassword("");
        } else {
            setBtnLog("Inscription");
            setPseudo("");
            setMail("");
            setPassword("");
        }
    };

    
    if (BtnLog === "Inscription") {
        return (
            <form className="Log">
                {connecter !== "Deconnexion" ? <p className="BtnLog" onClick={btnLog}>{BtnLog}</p> : ""}
                <div className="LogInput">
                    <p>Votre address mail</p>
                    <input type="email" name="mail" value={Mail} onChange={(e) => setter(setMail, e)}></input>
                    <p>Votre code secret</p>
                    <input type="password" name="password" value={Password} onChange={(e) => setter(setPassword, e)}></input>
                    <p className="BtnLogConnect" onClick={btnConnecter}>Connecter</p>
                </div>
            </form>
        )
    } else {
        return (
            <form className="Log">
                {connecter !== "Deconnexion" ? <p className="BtnLog" onClick={btnLog}>{BtnLog}</p> : ""}
                <div className="LogInput">
                    <p>Votre Pseudo</p>
                    <input type="text" name="pseudo" value={Pseudo} onChange={(e) => setter(setPseudo, e)}></input>
                    <p>Votre address mail</p>
                    <input type="email" name="mail" value={Mail} onChange={(e) => setter(setMail, e)}></input>
                    <p>Votre code secret</p>
                    <input type="password" name="password" value={Password} onChange={(e) => setter(setPassword, e)}></input>
                    <p className="BtnLogConnect" onClick={btnCreation}>Création</p>
                </div>
            </form>
        )
    }
}

export default Connect;