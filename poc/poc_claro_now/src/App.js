import React, { Suspense, lazy } from 'react';
import { HashRouter, BrowserRouter, Switch, Route, /* Redirect */} from 'react-router-dom';
import Modalidade from './pages/Modalidade/modalidade';
import Medalhas from './pages/Medalhas/medalhas';
import ConteudoPrincipal from './pages/ConteudoPrincipal/conteudoPrincipal';
import DestaqueMain from './pages/Destaque-main/destaque';

import Home from './pages/Home/home';
import VideoShowCase from './pages/videoshowcase';
import FixedShowCase from './pages/ShowCase';

const App = () =>(
  <HashRouter basename="/">
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={ConteudoPrincipal} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/modalidades' component={Modalidade} />
        <Route exact path='/destaque-main' component={DestaqueMain} />
        <Route exact path='/medalhas' component={Medalhas} />
        <Route exact path='/video' component={VideoShowCase} />
        <Route exact path='/aovivo' component={FixedShowCase} />
      </Switch>
    </Suspense>
  </HashRouter> 
)

export default App;