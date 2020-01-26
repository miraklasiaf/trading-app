import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

axios.defaults.baseURL = 'https://trading-app-c88cc.firebaseio.com';
Vue.use(BootstrapVue);

Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString();
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
