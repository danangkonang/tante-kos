import { 
    createAppContainer, 
    createStackNavigator,
    createMaterialTopTabNavigator 
  } from 'react-navigation';

import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';

import Home from './pages/Home';
import AddData from './pages/AddData';
// import TambahData from "./pages/TambahData";


const AppNavigator = createStackNavigator({
  addData: {
    screen : AddData,
    navigationOptions:{
      header:null
    }
  },
  login: {
    screen : Login,
    navigationOptions: {
        header : null
    }
  },
  signup: {
    screen : Signup,
    navigationOptions: {
      header : null
    }
  }
});

// const AppNavigator = createMaterialTopTabNavigator({
//   kost: Kost,
//   apartement: Apartement,
//   job: Job
// })
const Routes = createAppContainer(AppNavigator);
export default Routes;