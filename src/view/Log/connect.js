import { useState } from "react";
import Service from "../../services";

function Connect (isLog) {
    const [Pseudo, setPseudo] = useState("");
    const [Mail, setMail] = useState("");
    const [Password, setPassword] = useState("");

    const setter = (set, e) => {
        set(e.target.value);
    }

    const btnCreation = async () => {
        let path = "/connexion/add"
        let body = {
            pseudo:Pseudo,
            mail:Mail,
            password:Password
        }
        let creation = await Service.post(path, body)
        console.log(creation);
    }

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
                    <input type="text" name="pseudo" placeholder="" onChange={(e) => setter(setPseudo, e)}></input>
                    <p>Votre address mail</p>
                    <input type="email" name="mail" placeholder="" onChange={(e) => setter(setMail, e)}></input>
                    <p>Votre code secret</p>
                    <input type="password" name="password" placeholder="" onChange={(e) => setter(setPassword, e)}></input>
                    <p className="BtnLogConnect" onClick={btnCreation}>Création</p>
                </div>
            </form>
        )
    }
}

export default Connect;