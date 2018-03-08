/* eslint-disable max-len */
import { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import thunk from 'redux-thunk';
import registerScreens from './components/screens';
import * as reducers from './reducers/index';
import * as appActions from './actions/index';

const checkMarkIcon = require('./images/checkmark.png');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class extends Component {
    constructor(props) {
        super(props);
        store.subscribe(this.onStoreUpdate.bind(this));
        store.dispatch(appActions.appInitialized());
    }

    onStoreUpdate() {
        const { root } = store.getState().root;

        // handle a root change
        // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
        // eslint-disable-next-line eqeqeq
        console.log('currentRoot: ', this.currentRoot);
        console.log('New root: ', root);
        if (this.currentRoot !== root) {
            this.currentRoot = root;
            this.startApp(root);
        }
    }

    startApp(root) {
        switch (root) {
            case 'login':
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'ReactNativeReduxExample.Login', // unique ID registered with Navigation.registerScreen
                        title: 'Welcome', // title of the screen as appears in the nav bar (optional)
                        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
                    },
                });
                return;

            case 'after-login':
                Navigation.startTabBasedApp({
                    tabs: [
                        {
                            label: 'Home',
                            screen: 'ReactNativeReduxExample.HomeTab',
                            icon: checkMarkIcon,
                            selectedIcon: checkMarkIcon,
                            title: 'Hey',
                            overrideBackPress: false,
                            navigatorStyle: {},
                        },
                        {
                            label: 'Search',
                            screen: 'ReactNativeReduxExample.SearchTab',
                            icon: checkMarkIcon,
                            selectedIcon: checkMarkIcon,
                            title: 'Hey',
                            navigatorStyle: {},
                        },
                    ],
                });
                return;

            default:
                console.log('No Root Found');
        }
    }
}