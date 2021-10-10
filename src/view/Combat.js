import { Redirect } from "react-router";
import "./Combat.css"

function Combat(props) {


    /* Condition de redirection */
    if (props.connecter !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div className="ImageCombatBackGround">
            <p>TEST Combat</p>
            </div>
        </div>
    )
}

export default Combat;