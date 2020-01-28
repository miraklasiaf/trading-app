import store from '../store';

export default (to, from, next) => {
	if (store.state.idToken) {
		next();
	} else {
		next('login');
	}
};
