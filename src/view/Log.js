import "./Log.css"

function Connexion(props) {

    let affichage
    let contenu = `Si vous souhaiter créer un nouveau Sponsor 
    prennez une autre pierre`

    function connect () {
        return (
            <form className="Formulaire">
                <div className="FormulaireInput">
                    <p>Votre address mail</p>
                    <input type="email" name="mail" placeholder=""></input>
                    <p>Votre code secret</p>
                    <input type="password" name="password" placeholder=""></input>
                    <p className="BtnConnect">Connecter</p>
                </div>
            </form>
        )
    }

    function deconnect () {
        return (
            <form className="Formulaire">
                <div className="FormulaireInput">
                    <p>Merci de votre</p>
                    <p>passage</p>
                    <p className="BtnConnect">Deconnecter</p>
                </div>
            </form>
        )
    }

    if (props.connect === "Deconnexion") {
        affichage = deconnect()
    } else {
        affichage = connect()
    }

    return (
        <div> 
            <div className="ImageLogBackGround">
                <div className="Parchemin">
                    <p className="TitreParchemin">Bonjour Cher Sponsor</p>
                    <p className="ContenuParchemin"> {contenu} </p>
                    {affichage}
                    <p className="FooterParchemin"> Toute l'équipe du colisé vous remerci d'avoir prix le temps de nous lire </p>
                </div>
            </div>
        </div>
    )

  }
  
  export default Connexion;