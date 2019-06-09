import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.createEmployee()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add" />
        </Scene>
        <Scene key="createEmployee" component={CreateEmployee} title="Create Employee" />

      </Scene>
    </Router>
  );
};

export default RouterComponent;