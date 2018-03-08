import Immutable from 'seamless-immutable';
import * as types from '../actions/actiontypes';

const initialState = Immutable({
	root: undefined, // 'login' / 'after-login'
});

// root reducer
export function root(state = initialState, action = {}) {
	switch (action.type) {
		case types.ROOT_CHANGED:
			return Object.assign({}, state, {
				root: action.root,
			});

		default:
			return state;
	}
}
