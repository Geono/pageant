import { Navigation } from 'react-native-navigation';
import Login from './screens/login';
import HomeTab from './screens/homeTab';
import SearchTab from './screens/searchTab';


export default (store, Provider) => {
	Navigation.registerComponent('ReactNativeReduxExample.Login', () => Login, store, Provider);
	Navigation.registerComponent('ReactNativeReduxExample.HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('ReactNativeReduxExample.SearchTab', () => SearchTab, store, Provider);
};
