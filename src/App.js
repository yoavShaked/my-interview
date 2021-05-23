import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import storeConfig from './store';
import RoutesConfig from "./components/RoutesConfig";

function App() {
  return (
    <Provider store={storeConfig()}>
    <Router>
      <RoutesConfig />
    </Router>
    </Provider>
  );
}

export default App;
