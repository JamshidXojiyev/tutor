import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import GlobalState from "./context/globalContext";
import { getCookie } from "./functions/useCookies";
import { getLocalStorage } from "./functions/useLocalStorage";
import LanguagesProvider from "./locale/languagesContext";
import MainMenu from "./pages/main-view/main-menu";
import SignIn from "./pages/signin/signin";

function App() {
  const history = useHistory();
  !getLocalStorage("token") && history.push("/signin");
  console.log(getLocalStorage("token"));
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
