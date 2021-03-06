import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Contact from "./pages/contact/Contact";
import Index from "./pages/index/Index";
import Skills from "./pages/skills/Skills";
import Work from "./pages/work/Work";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/skills' component={Skills}/>
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
