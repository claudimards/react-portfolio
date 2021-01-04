import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/skills' component={Skills}/>
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
