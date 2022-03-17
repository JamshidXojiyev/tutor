import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import MainMenu from "./pages/main-view/main-menu";
import SignIn from "./pages/signin/signin";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route path="/" component={MainMenu} />
      </Switch>
    </>
  );
}

export default App;
