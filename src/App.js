import { BrowserRouter as Router, Switch } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Index path='/' exact />
      </Switch>
    </Router>
  );
}

export default App;
