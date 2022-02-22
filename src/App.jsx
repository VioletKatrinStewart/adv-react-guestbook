import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './views/Auth/Auth';

import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
