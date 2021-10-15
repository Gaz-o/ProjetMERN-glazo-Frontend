import { useState } from "react";

function ComAffichage(props) {
  const [Down, setDown] = useState(0);
  const [Up, setUp] = useState(4);

  let nombres = props.messages.length;
  let config = nombres - 1;

  const affichage = () => {
    return props.messages.map((message, key) => {
      if (key >= Down && key <= Up) {
        return ligne(message, key);
      } else {
        return null
      }
    });
  };

  function ligne(data, key) {
    const over = (e) => {
      if (e !== undefined) {
        return true;
      }
      return false;
    };
    
    return (
      <p key={key} className="ComAfficher" onMouseEnter={(e) => over(e)} onMouseLeave={(e) => over(e)}>
        {over() ? data["name"] : data["commentaire"]}
      </p>
    );
  }

  const comPrecedente = () => {
    if (Down !== 0 && Down > 0) {
      setUp(Down - 1);
      setDown(Down - 5);
    } else {
      setDown(config - 4);
      setUp(config + 1);
      console.log("reset", config);
    }
  };

  const comSuivant = () => {
    if (Up !== config && Up < config) {
      setUp(Up + 5);
      setDown(Down + 5);
    } else {
      setDown(0);
      setUp(4);
    }
  };

  console.log(Down, nombres, Up);

  return (
    <div className="LigneCom">
      <div className="osef" onClick={comPrecedente}>
        <div className="LeftPetitChevron"></div>
      </div>
      <div className="AffichageCom">{affichage()}</div>
      <div className="osef" onClick={comSuivant}>
        <div className="RightPetitChevron"></div>
      </div>
    </div>
  );
}
export default ComAffichage;
