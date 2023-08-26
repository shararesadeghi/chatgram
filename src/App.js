import {Switch, Route} from 'react-router-dom';
//components
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
