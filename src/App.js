import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Devis from './Component/Formulaire';
function App() {
  return (
    <div className="App">
      <Router>
   
    
   <Switch>
     <Route exact path="/">
      <div className="navv">
   
 <h1>Choisissez la formule qui vous convient:  </h1>
   
   <span  className="choix"><Link to="/depart">Formule Zen  </Link></span>
   <span  className="choix"><Link to="/chrono">Formule chrono  </Link></span>
   </div>
   
   
     </Route>
   <Route exact path="/depart">
   <div className="devis-wrap">
     <Devis/>
         </div>
   
     
   </Route>
  l'autre formule
   
   
   
   
   </Switch>
   
   
   </Router>
    </div>
  );
}

export default App;
