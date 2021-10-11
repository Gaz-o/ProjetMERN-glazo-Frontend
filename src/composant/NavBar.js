import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Combat from '../view/Combat';
import Fame from '../view/Fame';
import Forge from '../view/Forge';
import Home from '../view/Home';
import Connexion from '../view/Log';
import Personnage from '../view/Personnage';
import Profil from '../view/Profil';
import "./NavBar.css"

function NavBar() {
  /* 
    - verification de connection avec affichage de la barre nav dynamique
      *userConnexion
  */
  const [isConnect, setIsConnect] = useState("")

  let jtw = localStorage.getItem("jwt")

  useEffect(() => {
    if (jtw !== null) {
      setIsConnect(true)
    } else {
      setIsConnect(false)
    }
}, [isConnect]);

  console.log(jtw);

  // recup les info de connection ry setIsConnect
  let connecter
  if (isConnect === true) {
    connecter = "Deconnexion"
  } else {
    connecter = "Connexion"
  }

  return (
    <Router>
    <div>
      <div className="NavBar">
        <Link to="/">Hall des combattants</Link>      
        {isConnect === true ? <Link to="/personnage">Votre combattant</Link>: ""}    
        {isConnect === true ? <Link to="/combat">Prochain combat</Link>: ""}    
        <Link to="/fame">Hall of fame</Link>      
        {isConnect === true ? <Link to="/profil">Profil du Sponsor</Link>: ""}    
        {isConnect === true ? <Link to="/forge">Forge</Link>: ""}   
        <Link to="/connexion">{connecter}</Link>      
      </div>
      <Switch>
        <Route path="/connexion">
          <Connexion connecter={isConnect} setIsConnect={setIsConnect}/>
        </Route>
        <Route path="/forge">
          <Forge connecter={isConnect}/>
        </Route>
        <Route path="/fame">
          <Fame connecter={isConnect}/>
        </Route>
        <Route path="/profil">
          <Profil connecter={isConnect}/>
        </Route>
        <Route path="/personnage">
          <Personnage connecter={isConnect}/>
        </Route>
        <Route path="/combat">
          <Combat connecter={isConnect}/>
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