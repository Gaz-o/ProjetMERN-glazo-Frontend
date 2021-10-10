import "./Home.css"


function Home() {

  let contenu = `Nous vous proposons par cette missive d'investir dans un de nos Gladiateurs.
    Dans le cas ou ce serait votre premiere venue veuillez vous inscrire.
    En quelque phrase notre Colisé vous propose diver services, 
    comme un appartement pour votre combattant que vous pourrez aller voir entre les combat.
    Un Hall of fame ou son honoré les plus grands combattants.
    Vous pourrez modifier votre inscription si vous le voulez a notre services administratif.
    Et pour certain le plus inventif nous proposer vos création qui seront etudié par nos arbitre.
    `

  return (
    <div>
      <div className="ImageHomeBackGround"> 
        <div className="ParcheminHome">
          <p className="TitreParchemin">Bonjour Cher Sponsor</p>
          <p className="ContenuParchemin"> {contenu} </p>
          <p className="FooterParchemin"> Toute l'équipe du colisé vous remerci d'avoir prix le temps de nous lire </p>
        </div>
      </div> 
    </div>
  );
}

export default Home;