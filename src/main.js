import Vue from 'vue';

import VueRouter from 'vue-router';

import { configRouter } from './rotas';


/*=============================================
=            imports bibliotecas css          =
==============================================*/

/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

/* font-awersome */
import 'font-awesome/css/font-awesome.min.css';

/* Style global */

import './assets/css/style.css';

/*=====  End of Section comment block  ======*/


/*==============================================
=            imports bibliotecas js            =
==============================================*/

/* bootstrap */
import 'bootstrap/dist/js/bootstrap.min.js';


/*=====  End of Section comment block  ======*/

Vue.use(VueRouter);

const router = new VueRouter({
	history: true,
	saveScrolPosition: true
});

configRouter(router);

const App = Vue.extend(require('./App.vue'));

router.start(App, '#app');
