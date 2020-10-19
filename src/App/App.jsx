import React from 'react';
import {
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter 
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { alertConstants } from '../constants/alert';
import Alert from '@material-ui/lab/Alert';
import PrivateRoute from '../components/PrivateRoute';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { Login } from '../components/Login/Login';
import './App.css';

const App = () => {
  const { alert } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <BrowserRouter basename="/">
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}/>
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" exact />
        </Switch>
      </BrowserRouter>

      { alert.type && 
        <div className="sv-alert">
          <Alert 
            variant="filled"
            severity={alert.type}
            onClose={ () => dispatch({type:alertConstants.CLEAR}) }>
            {alert.message}
          </Alert>
        </div>
      }

    </div>
  );
}

export default App;
