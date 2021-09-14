
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import TamNav from './pages/nav/Nav.js'
import Classes from './pages/classes_offered/Classes.js'
import MainPage from './pages/main/MainPage.js'
import Coaches from './pages/meet_the_coaches/Coaches.js'
import Faq from './pages/FAQ/Faq.js'
import Pricing from './pages/pricing/Pricing.js'
import CtaForm from './pages/try_a_free_class/CtaForm.js'
import Schedule from './pages/schedule/schedule.js';


/**
 * Will handle all routing of the app to different component pages
 */

function App() {
  return (
    <div className="App">
      <TamNav/>

      <Router>
        <Switch>
        
          <Route path="/try_a_free_class">
            <CtaForm/>
          </Route>

          <Route path='/Classes'>
            <Classes/>
          </Route>

          <Route path='/Pricing'>
            <Pricing/>
          </Route>

          <Route path='/Coaches'>
            <Coaches/>
          </Route>

          <Route path='/FAQ'>
            <Faq/>
          </Route>

          <Route path='/Schedule'>
            <Schedule/>
          </Route>

          <Route path="/">
            <MainPage/>
          </Route>

        </Switch>


      </Router>
      
      
    </div>
  );
}

export default App;
