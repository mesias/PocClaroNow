import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, /* Redirect */} from 'react-router-dom';
import YouTube from './consts/youtube'
import HomeDestaque from './pages/HomeDestaque/homeDestaque';

const Home = lazy(() => import('./pages/Home/home'));
const VideoShowCase = lazy(() => import('./pages/videoshowcase'));
const FixedShowCase = lazy(() => import('./pages/ShowCase'));

const Routes = () =>(
  <>
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home-destaque' component={HomeDestaque} />
        <Route exact path='/video' component={VideoShowCase} />
        <Route exact path='/aovivo' component={FixedShowCase} />
        {/* <Route exact path='/Register' component={Register}></Route> */}
        {/* <Route exact path='/Salao' component={Salao}></Route>  */}
        {/* <Route exact path='/Cozinha' component={Cozinha}></Route>        */}
      </Switch>
    </Suspense>
  </BrowserRouter> 
  </> 
)

export default Routes;