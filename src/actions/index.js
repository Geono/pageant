/* eslint-disable no-unused-vars */
import * as types from './actiontypes';

/* --------------- */
/* Action Creators */
/* --------------- */

export function changeAppRoot(root) {
	return {
		type: types.ROOT_CHANGED,
		root,
	};
}

/* --------------------------- */
/* dispatch the actionCreators */
/* --------------------------- */


export function appInitialized() {
	return async (dispatch, getState) => {
		// since all business logic should be inside redux actions
		// this is a good place to put your app initialization code
		dispatch(changeAppRoot('login'));
	};
}

export function login() {
	return async (dispatch, getState) => {
		// login logic would go here, and when it's done, we switch app roots
		dispatch(changeAppRoot('after-login'));
	};
}

