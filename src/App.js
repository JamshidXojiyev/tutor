import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalState from "./context/globalContext";
import { getLocalStorage } from "./functions/useLocalStorage";
import LanguagesProvider from "./locale/languagesContext";
import MainMenu from "./pages/main-view/main-menu";
import SignIn from "./pages/signin/signin";

function App() {
  const history = useHistory();
  !getLocalStorage("token") && history.push("/signin");
  return (
    <LanguagesProvider>
      <ToastContainer />
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
