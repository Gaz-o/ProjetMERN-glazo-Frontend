import { Redirect } from "react-router";
import "./Personnage.css"

function Personnage(props) {


    /* Condition de redirection */
    if (props.connecter !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div className="ImagePersonnageBackGround">
                <p>TEST Personnage</p>
            </div>
        </div>
    )
}

export default Personnage;