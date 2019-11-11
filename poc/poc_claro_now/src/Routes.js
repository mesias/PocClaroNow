import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, /* Redirect */} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/home'));

const Routes = () =>(
  <>
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        {/* <Route exact path='/Login' component={Login}></Route> */}
        {/* <Route exact path='/Register' component={Register}></Route> */}
        {/* <Route exact path='/Salao' component={Salao}></Route>  */}
        {/* <Route exact path='/Cozinha' component={Cozinha}></Route>        */}
      </Switch>
    </Suspense>
  </BrowserRouter> 
  </> 
)

export default Routes;