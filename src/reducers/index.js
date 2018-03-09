import { reducer as formReducer } from 'redux-form';
import { root } from './root.reducer';

/*
	This file exports the reducers as an object which will be
	passed onto combineReducers method at src/app.js
*/

export {
	root,
	formReducer
};
