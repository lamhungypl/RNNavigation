import React, {useEffect} from 'react';
import Orientation from 'react-native-orientation';
import Navigator from './navigator/Navigation';

const App = () => {
  useEffect(() => {
    //Orientation.lockToPortrait();
  }, []);
  return <Navigator />;
};
export default App;
