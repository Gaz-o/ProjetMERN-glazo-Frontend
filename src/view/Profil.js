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
            <p>TEST Profil</p>
            </div>
        </div>
    )
}

export default Profil;