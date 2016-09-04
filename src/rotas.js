

var rota = {
	nutrihealth: 	require('./rotas/inicio.vue'),
	coach: 			require('./rotas/coach.vue'),
	workshop: 		require('./rotas/workshop.vue'),
	programas: 		require('./rotas/programas.vue'),
	projetodevida: 	require('./rotas/projetodevida.vue'),
	acelerese: 		require('./rotas/acelerese.vue'),
	blog: 			require('./rotas/blog.vue'),
	contato: 		require('./rotas/contato.vue')
};

export function configRouter(router)
{
	router.map({
		'/inicio': {
			component: rota.nutrihealth
		},
		'/coach': {
			component: rota.coach
		},
		'/workshop': {
			component: rota.workshop
		},
		'/programas': {
			component: rota.programas
		},
		'/projetodevida': {
			component: rota.projetodevida
		},
		'/acelerese': {
			component: rota.acelerese
		},
		'/blog': {
			component: rota.blog
		},
		'contato': {
			component: rota.contato
		}

	});

	router.redirect({
		'*': '/inicio'
	});
}