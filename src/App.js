import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Demo from "./components/Demo/Demo";
import DetailFood from "./components/DetailFood/DetailFood";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/home">
            <Main></Main>
          </Route>
          <Route path="/food/:foodId">
            <DetailFood></DetailFood>
          </Route>
          <Route path="/food">
            <Demo></Demo>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
