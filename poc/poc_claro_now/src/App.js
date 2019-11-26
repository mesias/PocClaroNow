import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, /* Redirect */} from 'react-router-dom';
import Modalidade from './pages/Modalidade/modalidade';
import Medalhas from './pages/Medalhas/medalhas';
import ConteudoPrincipal from './pages/ConteudoPrincipal/conteudoPrincipal';
import DestaqueMain from './pages/Destaque-main/destaque';
import Home from './pages/Home/home'
import VideoShowCase from './pages/videoshowcase';
import FixedShowCase from './pages/ShowCase';

const Routes = () =>(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/'>
          <ConteudoPrincipal/>
        </Route>
        <Route path='/home' component={Home} />
        <Route path='/modalidades' component={Modalidade} />
        <Route path='/destaque-main' component={DestaqueMain} />
        <Route path='/medalhas' component={Medalhas} />
        <Route path='/video' component={VideoShowCase} />
        <Route path='/aovivo' component={FixedShowCase} />
      </Switch>
    </Suspense>
  </BrowserRouter> 
)

export default Routes;