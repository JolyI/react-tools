import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home/index'

function App() {
  return ( 
    < div className = "App" >
      <Home />
    </div>
  );
}

export default App;
