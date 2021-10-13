import combattant1 from "../../../img/combattant/combattant1.jpg";
import combattant2 from "../../../img/combattant/combattant2.jpg";
import combattant3 from "../../../img/combattant/combattant3.jpg";
import combattant4 from "../../../img/combattant/combattant4.jpg";
import combattant5 from "../../../img/combattant/combattant5.jpg";
import combattant6 from "../../../img/combattant/combattant6.jpg";

function ChoixImagePersonnage(props) {
  let Choix = props.Choix
  let setChoix = props.setChoix
  let choixPersonnages = [
    combattant1,
    combattant2,
    combattant3,
    combattant4,
    combattant5,
    combattant6,
  ];
  let nombres = choixPersonnages.length;

  const imageprecedente = () => {
    console.log(nombres, Choix);
    if (Choix === 0) {
      setChoix(nombres - 1);
    } else {
      setChoix(Choix - 1);
    }
  };

  const imagesuivant = () => {
    console.log(nombres, Choix);
    if (Choix === nombres - 1) {
      setChoix(0);
    } else {
      setChoix(Choix + 1);
    }
  };

  return (
    <div className="ContenuCreerPersonnage">
      <div className="LeftChevron" onClick={imageprecedente}></div>
      <img
        className="ImageCombattantCreerPersonnage"
        src={choixPersonnages[Choix]}
        alt="un combattant"
      />
      <div className="RightChevron" onClick={imagesuivant}></div>
    </div>
  );
}

export default ChoixImagePersonnage;
