import Navbar from './Navbar';
import Home from './Home';
import Posts from './Posts';
import ClickerGame from './ClickerGame';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostDetails from './PostDetails';
import PageNotFound from './PageNotFound';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/posts">
              < Posts/>
            </Route>
            <Route exact path="/clickergame">
              <ClickerGame/>
            </Route>
            <Route exact path="/posts/:id">
              < PostDetails/>
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
