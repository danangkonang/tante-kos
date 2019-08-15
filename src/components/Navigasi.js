import { 
    createAppContainer, 
    createMaterialTopTabNavigator 
  } from 'react-navigation';

import Kost from './nav/Kost'
import Apartement from './nav/Apartement';
import Job from './nav/job';

const AppNavigator = createMaterialTopTabNavigator({
    kost: Kost,
    apartement: Apartement,
    job: Job
  })


const Navigasi = createAppContainer(AppNavigator);
export default Navigasi;