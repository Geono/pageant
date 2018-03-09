import { Navigation } from 'react-native-navigation';
import Intro from './screens/intro';
import HomeTab from './screens/homeTab';
import SearchTab from './screens/searchTab';


export default (store, Provider) => {
	Navigation.registerComponent('Intro', () => Intro, store, Provider);
	Navigation.registerComponent('HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('SearchTab', () => SearchTab, store, Provider);
};
