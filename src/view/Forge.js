import { Redirect } from "react-router";
import "./Forge.css"

function Forge(props) {


    /* Condition de redirection */
    if (props.connecter !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div className="ImageForgeBackGround">
            <p>TEST Forge</p>
            </div>
        </div>
    )
}

export default Forge;