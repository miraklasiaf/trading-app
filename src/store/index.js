import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import auth from './modules/auth';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
	actions: actions,
	modules: {
		stocks,
		portfolio,
		auth
	}
});
