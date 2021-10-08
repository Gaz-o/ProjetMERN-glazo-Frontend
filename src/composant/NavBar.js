import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../view/Home';
import Connexion from '../view/Log';
import "./NavBar.css"

function NavBar() {

  /* 
    - verification de connection avec affichage de la barre nav dynamique
      *userConnexion
  */
    //const [isConnect, setIsConnect] = useState(true)
    const [isConnect, setIsConnect] = useState(false)

    let connect
    // recup les infode connection ry setIsConnect

    if (isConnect === true) {
      connect = "Deconnexion"
    } else {
      connect = "Connexion"
    }
  

    return (
      <Router>
      <div>
        <div className="NavBar">
          <Link to="/">Hall des combattants</Link>      
          {isConnect === true ? <Link to="/">Votre combattant</Link>: ""}    
          {isConnect === true ? <Link to="/">Prochain combat</Link>: ""}    
          <Link to="/">Hall of fame</Link>      
          {isConnect === true ? <Link to="/">Profil du Sponsor</Link>: ""}    
          {isConnect === true ? <Link to="/">Forge</Link>: ""}   
          <Link to="/connexion">{connect}</Link>      
        </div>
        <Switch>
          <Route path="/connexion">
            <Connexion connect />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
  
  export default NavBar;