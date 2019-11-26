import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, /* Redirect */} from 'react-router-dom';
import Modalidade from './pages/Modalidade/modalidade';
import Medalhas from './pages/Medalhas/medalhas';
import ConteudoPrincipal from './pages/ConteudoPrincipal/conteudoPrincipal';
import DestaqueMain from './pages/Destaque-main/destaque';

const Home = lazy(() => import('./pages/Home/home'));
const VideoShowCase = lazy(() => import('./pages/videoshowcase'));
const FixedShowCase = lazy(() => import('./pages/ShowCase'));

const Routes = () =>(
  <BrowserRouter>
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
  </BrowserRouter> 
)

export default Routes;