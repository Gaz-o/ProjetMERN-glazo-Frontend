import "./Creer.css";
import StatCreation from "./StatCreation";

function CreationPersonnage(props) {
  return <StatCreation recupUser={props.recupUser} setBtnParam={props.setBtnParam} />;
}

export default CreationPersonnage;
