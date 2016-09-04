
<script>

	import CpHeader from './componentes/header.vue';
	import CpFooter from './componentes/footer.vue';

	export default {

		components: {
			CpHeader,
			CpFooter
		}
	}

</script>

<template>

	<div>
		<cp-header></cp-header>

		<div>
			<router-view></router-view>
		</div>

		<cp-footer></cp-footer>


	</div>


</template>