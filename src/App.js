import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./components/intro.js";
import HeaderContainer from "./containers/headerContainer";
import GrupoContainer from "./containers/grupoContainer";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={Intro} />
          {/* <Route exact path="/grupo/nuevoGrupo" component={NuevoGrupo} /> */}
          <Route
            path="/grupos/:grupoId"
            render={({ match }) => <GrupoContainer id={match.params.grupoId} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
