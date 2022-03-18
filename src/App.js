import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import GlobalState from "./context/globalContext";
import LanguagesProvider from "./locale/languagesContext";
import MainMenu from "./pages/main-view/main-menu";
import SignIn from "./pages/signin/signin";

function App() {
  return (
    <LanguagesProvider>
      <GlobalState>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route path="/" component={MainMenu} />
        </Switch>
      </GlobalState>
    </LanguagesProvider>
  );
}

export default App;
