import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./intro";
import Header from './header/header';
import GrupoContenedor from './grupos/grupoContenedor';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Intro} />
          {/* <Route exact path="/grupo/nuevoGrupo" component={NuevoGrupo} /> */}
          <Route
            path="/grupos/:grupoId"
            render={({ match }) => <GrupoContenedor id={match.params.grupoId} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
