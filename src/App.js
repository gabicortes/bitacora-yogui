import Home from "./Home/Home";
import CommunityManager from "./CommunityManager/CommunityManager.jsx";
import AshtangaYoga from "./AshtangaYoga/AshtangaYoga.jsx";
import ScrollToTop from "./ScrollToTop";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/ashtangayoga">
          <AshtangaYoga />
        </Route>
        <Route path="/communitymanager">
          <CommunityManager />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
