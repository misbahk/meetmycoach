import './App.css';
import { BrowserRouter , Route, Switch } from "react-router-dom";

import Landingpage from './landingpage';
import SimpleTabs from './components/pg2/page2';
import  Page4 from './p4';
import Page7 from './p7'
import Page10 from './pg10'
import Page11 from './p11';
import Page12 from './p12';
import Page13 from './p13';
import Page14 from './p14';
import Page17 from './p17';

import Page19 from './p19'

import Page20 from './page20/Card20';
import Page25 from './pg25';
import Card26 from './page26/Card26';
import Page29 from './pg29';
import Page30 from './pg30';
import Page31 from './pg31';
import Page33 from './pg33';

import Seven from './components/page8/Seven';
import Nine from './components/page9/nine';
import Fifteen from './components/page15/Fifteen';


import Sixteen from './components/page16/Sixteen';
import DashboardLanding from './components/Dashboard/DashboardLanding';
import Card28 from './page28/Card28';


function App() {
  return (



    <div className="App">
          <>
    <BrowserRouter>
   <Switch>
   <Route exact path="/" component={Landingpage}/>
   <Route exact path="/page2" component={SimpleTabs}/>
   <Route  path="/page4" >
     <Page4/>
   </Route>
   <Route exact path="/page7" component={Page7}/>
   <Route exact path="/page8" component={Seven}/>
   <Route exact path="/page9" component={Nine}/>
  
   <Route exact path="/page10" component={Page10}/>
   <Route exact path="/page11" component={Page11}/>
   <Route exact path="/page12" component={Page12}/>
   <Route exact path="/page13" component={Page13}/>
   <Route exact path="/page14" component={Page14}/>
   <Route exact path="/page15" component={Fifteen}/>

   <Route exact path="/page17" component={Page17}/>
   <Route exact path="/page18" component={DashboardLanding}/>

   <Route exact path="/page19" component={Page19}/>
   <Route exact path="/page20" component={Page20}/>
   <Route exact path="/page25" component={Page25}/>
   <Route exact path="/page26" component={Card26}/>
   <Route exact path="/page28" component={Card28}/>
   <Route exact path="/page29" component={Page29}/>
   <Route exact path="/page30" component={Page30}/>
   <Route exact path="/page31" component={Page31}/>
   <Route exact path="/page33" component={Page33}/>

  

<Route exact path="/page16" component={Sixteen}/>
  
   </Switch>
   </BrowserRouter>
   </>
     
    </div>

  );
}
export default App;
