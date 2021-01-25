import Header from './Components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
