
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Servicing from './components/Servicing/Servicing/Servicing';
import Footer from './components/Shared/Header/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return(
    <div className="App">
     <AuthProvider>
     <Router>
     <Header></Header>
     
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/booking/:serviceId'>
          <Servicing></Servicing>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
     </Router>
    
     </AuthProvider>
    </div>
  )
  
}

export default App;
