

<script>

		import BlocoInicio from '../classes/BlocosInicio.js';

		export default{
			data(){

				return {

					bloco: BlocoInicio.BLOCO.originalidade

				}
			},

			methods:{

				mudarBloco(ev, id)
				{
					var self = this;
					ev.preventDefault();

					switch(id)
					{
						case '1':
							self.bloco = '';
							self.bloco = BlocoInicio.BLOCO.originalidade;
							$('#bloco').fadeTo('show', 0.5);
							return;

						case '2':
							self.bloco = '';
							self.bloco = BlocoInicio.BLOCO.missao;
							$('#bloco').fadeTo('show', 0.5);
							return;

						case '3':
							self.bloco = '';
							self.bloco = BlocoInicio.BLOCO.criatividade;
							$('#bloco').fadeTo('show', 0.5);
							return;

						case '4':
							self.bloco = '';
							self.bloco = BlocoInicio.BLOCO.hoje;
							$('#bloco').fadeTo('show', 0.5);
							return;

					}
				}
			}
		}


</script>

<template>
	<div>

		<!--=====================================================================================================================
		        								=            Carousel          =
		=======================================================================================================================-->

		<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

			<ol class="carousel-indicators">
				<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
				<li data-target="#carousel-example-generic" data-slide-to="1"></li>
				<li data-target="#carousel-example-generic" data-slide-to="2"></li>
			</ol>

			<div class="carousel-inner" role="listbox">
				<div class="item active">
					<img class="imagem-carousel" src="../assets/img/carousel.jpg" alt="">
				</div>
				<div class="item">
					<img class="imagem-carousel" src="../assets/img/carousel.jpg" alt="">
				</div>
				<div class="item">
					<img class="imagem-carousel" src="../assets/img/carousel.jpg" alt="">
				</div>
			</div>

			<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>

		<!--=====================================================================================================================
		        								=            Inicio         =
		=======================================================================================================================-->

		<div class="bloco-inicio">
			<div class="container">
				<div class="row bloco-titulo">
					<div class="col-xs-12">
						<h1>Nutrihealfthcoach</h1>
					</div>
				</div>

				<div class="row margin-top-40">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<img class="imagem-user img-responsive" src="../assets/img/user.png">
						<h2>Cristiane Mascarenhas</h2>
					</div>


					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<h2>Olá Tudo bem ?</h2>
						<p class="margin-top-40 text-justify">
							Aqui você vai encontrar um novo legado para sua vida e a liberdade de uma vida feliz!
							Meu nome é Cristiane Mascarenhas. Sou Nutricionista, Coach, e Analista Comportamental.
							Empreendedora movida a desenvolver pessoas e empresas que estão em busca da Alta Performance
							na vida pessoal e profissional, E foi através desta vondade de empreender com propósito que nasceu
							a Nutrihealth Coach.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!--=====================================================================================================================
		        								=            Dimensões          =
		=======================================================================================================================-->

		<div class="bloco-dimensoes">
			<div class="container">
				<div class="row">
					<div class="bloco-titulo margin-top-40">
						<div class="col-xs-12">
							<h1 style="color: #444;">Dimensões</h1>
							<hr>
							<div class="sub-titulo-444">
								Nutrihealth Coach foca nas 6 dimensões da vida: Intelectual, Corporal, Financeira, Emocional, Social e Espiritual. Nosso intuito é apoiar na mudança comportamental
								e extrair o seu potencial para vida.
							</div>
						</div>


						<ul class="ch-grid">

							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<li>
									<div class="ch-item circulo-1">
										<div class="ch-info">
											<h3>Espiritual</h3>
											<p>Crença ou orientação religiosa, lições ou ensinamentos religiosos</p>
										</div>
									</div>
									<div class="texto-dimensoes">Espiritual</div>
								</li>
							</div>

							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<li>
									<div class="ch-item circulo-2">
										<div class="ch-info">
											<h3>Intelectual</h3>
											<p>Capacidade de abstrair idéia ou noção de alguma coisa, analisar, comparar, articular</p>
										</div>
									</div>
									<div class="texto-dimensoes">Intelectual</div>
								</li>
							</div>

							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<li>
									<div class="ch-item circulo-3">
										<div class="ch-info">
											<h3>Corporal</h3>
											<p>Saude, corpo, alimento e repouso</p>
										</div>
									</div>
									<div class="texto-dimensoes">Corporal</div>
								</li>
							</div>

							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<li>
									<div class="ch-item circulo-4">
										<div class="ch-info">
											<h3>Financeiro</h3>
											<p>Estabilidade, dinheiro, qualidade de vida, estilo de vida</p>
										</div>
									</div>
									<div class="texto-dimensoes">Financeiro</div>
								</li>
							</div>

							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<li>
									<div class="ch-item circulo-5">
										<div class="ch-info">
											<h3>Emocional</h3>
											<p>Sentimentos, experiências, equilibrio</p>
										</div>
									</div>
									<div class="texto-dimensoes">Emocional</div>
								</li>
							</div>

							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<li>
									<div class="ch-item circulo-6">
										<div class="ch-info">
											<h3>Social</h3>
											<p>Família, amigos, colegas de trabalho, relações amorosas</p>
										</div>
									</div>
									<div class="texto-dimensoes">Social</div>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!--=====================================================================================================================
		        								=            Casa          =
		=======================================================================================================================-->

		<div class="bloco-casa">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<div class="bloco-icones-smiles">
							<svg class="rotate" style="width:48px;height:48px" viewBox="0 0 24 24">
								<path fill="#FFF" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" />
							</svg>

							<svg class="rotate" style="width:64px;height:64px" viewBox="0 0 24 24">
								<path fill="#FFF" d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z" />
							</svg>

							<svg class="rotate" style="width:72px;height:72px" viewBox="0 0 24 24">
								<path fill="#FFF" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
							</svg>

							<svg class="rotate" style="width:96px;height:96px" viewBox="0 0 24 24">
								<path fill="#FFF" d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
							</svg>

							<svg class="rotate" style="width:128px;height:128px" viewBox="0 0 24 24">
								<path fill="#FFF" d="M19,10C19,11.38 16.88,12.5 15.5,12.5C14.12,12.5 12.75,11.38 12.75,10H11.25C11.25,11.38 9.88,12.5 8.5,12.5C7.12,12.5 5,11.38 5,10H4.25C4.09,10.64 4,11.31 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,11.31 19.91,10.64 19.75,10H19M12,4C9.04,4 6.45,5.61 5.07,8H18.93C17.55,5.61 14.96,4 12,4M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
							</svg>
						</div>

						<div class="sub-titulo-processo">
							Processo de coaching é uma relacão de parceria entre Coach(profissional) e Coachee(cliente) com foco em alcançar
							a Meta que será trabalhada durante as sessões. Durante todo o processo o Coachee passa por um processo de transformação
							e autoconhecimento que le proporcionará aperfeiçoamento continuo.
						</div>
					</div>

					<!---->

					<div class="bloco-icone-crescimento">
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<svg class="rotate-100" style="width:128px;height:128px" viewBox="0 0 24 24">
							    <path fill="#FFF" d="M5,6.41L6.41,5L17,15.59V9H19V19H9V17H15.59L5,6.41Z" />
							</svg>
						</div>
					</div>

					<div class="sub-titulo-crescimento">
						A nutrihealth trabalha em varias vertentes programas, workshops, palestras, encontros que contribuirá para aumentar a produtividade,
						comunicação interpessoal e a construção para um verdadeiro e construtivo desenvolvimento pessoal e profissional. E os resultados que
						colherá é o alcance das suas realizações
					</div>
				</div>
			</div>
		</div>


		<img src="../assets/img/img-casa.jpg"  class="img-casa" alt="">

		<!--=====================================================================================================================
		        								=            Porque preciso de um coach          =
		=======================================================================================================================-->

		<div class="container margin-top-40">
			<div class="row">
				<div class="col-xs-12">
					<h1 style="color:#444">Porque eu preciso de um Coach <span style="color:#f39c12">?</span></h1>
					<hr>
					<div class="sub-titulo-444">
						A nutrihealth quer extrair o melhor que há em você. Queremos desconstruir essas crenças que te
						limitam a conquistar os seus sonhos.
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 text-center">
					<svg style="width:48px;height:48px" viewBox="0 0 24 24">
	    				<path fill="#f39c12" d="M17.12,10L16.04,8.18L15.31,11.05L17.8,15.59V22H16V17L13.67,13.89L12.07,18.4L7.25,20.5L6.2,19L10.39,16.53L12.91,6.67L10.8,7.33V11H9V5.8L14.42,4.11L14.92,4.03C15.54,4.03 16.08,4.37 16.38,4.87L18.38,8.2H22V10H17.12M17,3.8C16,3.8 15.2,3 15.2,2C15.2,1 16,0.2 17,0.2C18,0.2 18.8,1 18.8,2C18.8,3 18,3.8 17,3.8M7,9V11H4A1,1 0 0,1 3,10A1,1 0 0,1 4,9H7M9.25,13L8.75,15H5A1,1 0 0,1 4,14A1,1 0 0,1 5,13H9.25M7,5V7H3A1,1 0 0,1 2,6A1,1 0 0,1 3,5H7Z" />
					</svg>
					<p class="sub-titulo-texto">
						Sinergia criativa que desperta a motivação
					</p>
				</div>

				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 text-center">
					<svg style="width:48px;height:48px" viewBox="0 0 24 24">
   						<path fill="#f39c12" d="M5,1C5,3.7 6.56,6.16 9,7.32V22H11V15H13V22H15V7.31C17.44,6.16 19,3.7 19,1H17A5,5 0 0,1 12,6A5,5 0 0,1 7,1M12,1C10.89,1 10,1.89 10,3C10,4.11 10.89,5 12,5C13.11,5 14,4.11 14,3C14,1.89 13.11,1 12,1Z" />
					</svg>
					<p class="sub-titulo-texto">
						Apoio emocional que leva a autoestima
					</p>
				</div>

				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 text-center">
					<svg style="width:48px;height:48px" viewBox="0 0 24 24">
	    				<path fill="#f39c12" d="M9,5A3.5,3.5 0 0,1 12.5,8.5A3.5,3.5 0 0,1 9,12A3.5,3.5 0 0,1 5.5,8.5A3.5,3.5 0 0,1 9,5M9,13.75C12.87,13.75 16,15.32 16,17.25V19H2V17.25C2,15.32 5.13,13.75 9,13.75M17,12.66L14.25,9.66L15.41,8.5L17,10.09L20.59,6.5L21.75,7.91L17,12.66Z" />
					</svg>
					<p class="sub-titulo-texto">
						Desafio intelectuall para despertar vocação, autoexpressão, comunicação, habilidades, e competências
					</p>
				</div>

				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 text-center">
					<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    					<path fill="#f39c12" d="M14,6H10V4H14M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8C22,6.89 21.1,6 20,6Z" />
					</svg>
					<p class="sub-titulo-texto">
						Vantagem competitiva para empreender, gerir um negócio, profissão e carreira
					</p>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12 text-center margin-top-20 margin-bottom-20">
					<svg style="width:96px;height:96px" viewBox="0 0 24 24">
    					<path fill="#f39c12" d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M13,9.94L14.06,11L15.12,9.94L16.18,11L17.24,9.94L15.12,7.82L13,9.94M8.88,9.94L9.94,11L11,9.94L8.88,7.82L6.76,9.94L7.82,11L8.88,9.94M12,17.5C14.33,17.5 16.31,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5Z" />
					</svg>
					<h2 style="color:#444">Bem estar e Sucesso !</h2>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 text-center">
					<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    					<path fill="#f39c12" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
					</svg>
					<p class="sub-titulo-texto">
						Autodeterminação, autoconfiança, amor próprio.
					</p>
				</div>

				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 text-center">
					<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    					<path fill="#f39c12" d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V10.09L23,12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
					</svg>
					<p class="sub-titulo-texto">
						Realizações siguinificativas para uma vida mais gratificante e feliz
					</p>
				</div>

				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 text-center">
					<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    					<path fill="#f39c12" d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
					</svg>
					<p class="sub-titulo-texto">
						Otimização dos pensamentos positivos para alcançar os resultados mais rapido
					</p>
				</div>

				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 text-center">
					<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    					<path fill="#f39c12" d="M6,2L10,6L7,17L12,22L17,17L14,6L18,2Z" />
					</svg>
					<p class="sub-titulo-texto">
						Aumentar a eficacia e eficiência com mais compromisso e dedicação
					</p>
				</div>
			</div>
		</div>


		<!--=====================================================================================================================
		        					=            Originalidade, Missão, Criatividade, Hoje          =
		=======================================================================================================================-->

		<div class="container margin-top-50">
			<div class="row">
				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
					<div class="blocos" v-on:click="mudarBloco($event, '1')">
						<h2>Originalidade</h2>
						<p class="text-center">
							Pensar fora da caixa
						</p>
					</div>
				</div>

				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
					<div class="blocos" v-on:click="mudarBloco($event, '2')">
						<h2>Missão</h2>
						<p class="text-center">
							Compromisso e Propósito
						</p>
					</div>
				</div>

				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
					<div class="blocos" v-on:click="mudarBloco($event, '3')">
						<h2>Criatividade</h2>
						<p class="text-center">
							Quais são os seus gaps
						</p>
					</div>
				</div>

				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
					<div class="blocos" v-on:click="mudarBloco($event, '4')">
						<h2>Hoje</h2>
						<p class="text-center">
							Empirismo
						</p>
					</div>
				</div>

				<div class="col-xs-12" >
					<div class="info-blocos" >
						<p>{{ bloco }}</p>
						<hr>
					</div>
				</div>

			</div>
		</div>





	</div> <!-- End component-->

</template>

<style scoped>

.imagem-carousel
{
    width: 100%;
    height: 980px !important;
}

.imagem-user
{
	width: 256px;
	height: 256px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.bloco-inicio
{
	background-color: #2ecc71;
	padding-bottom: 50px;
}

.bloco-titulo
{
	height: 180px;
}

.bloco-dimensoes
{
	background-color: #FFF;
}

hr
{
	width: 160px;
	border-bottom: 1px solid #27ae60;
}

/************************************************************
 *
 * Efeito circulos dimensões
 *
 ************************************************************/


.ch-grid {
	margin: 20px 0 0 0;
	padding: 0;
	list-style: none;
	display: block;
	text-align: center;
	width: 100%;
}

.ch-grid:after,
.ch-item:before {
	content: '';
    display: table;
}

.ch-grid:after {
	clear: both;
}

.ch-grid li {
	width: 220px;
	height: 220px;
	display: inline-block;
}


.ch-item {
	width: 220px;
	height: 220px;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	cursor: default;
	box-shadow:
		inset 0 0 0 16px rgba(255,255,255,0.6),
		0 1px 2px rgba(0,0,0,0.1);
	transition: all 0.4s ease-in-out;
}

.circulo-1 {
	border-radius:50%;
	-moz-border-radius:50%;
	-webkit-border-radius:50%;
	background-color: #8e44ad;
}

.circulo-2 {
	border-radius:50%;
	-moz-border-radius:50%;
	-webkit-border-radius:50%;
	background-color: #c0392b;
}

.circulo-3 {
	border-radius:50%;
	-moz-border-radius:50%;
	-webkit-border-radius:50%;
	background-color: #27ae60;
}

.circulo-4 {
	border-radius:50%;
	-moz-border-radius:50%;
	-webkit-border-radius:50%;
	background-color: #f39c12;
}

.circulo-5 {
	border-radius:50%;
	-moz-border-radius:50%;
	-webkit-border-radius:50%;
	background-color: #2980b9;
}

.circulo-6 {
	border-radius:50%;
	-moz-border-radius:50%;
	-webkit-border-radius:50%;
	background-color: #d35400;
}

.ch-info
{
	position: absolute;
	background: #fff;
	width: inherit;
	height: inherit;
	border-radius: 50%;
	overflow: hidden;
	opacity: 0;
	transition: all 0.4s ease-in-out;
	transform: scale(0);
}

.ch-info h3 {

	color: #444;
	text-transform: uppercase;
	font-size: 22px;
	margin: 0 30px;
	padding: 45px 0 0 0;
	height: 140px;
	font-family: 'Open Sans', Arial, sans-serif;
	text-shadow:
		0 0 1px #fff,
		0 1px 2px rgba(0,0,0,0.3);
}

.ch-info p {
	color: #444;

	font-family: 'Open Sans', Arial, sans-serif;
	margin: -70px 30px;
	letter-spacing: -1px;
	font-size: 18px;
	border-top: 1px solid rgba(255,255,255,0.5);
	opacity: 0;
	transition: all 1s ease-in-out 0.4s;
}

.ch-info p a {
	display: block;
	color: rgba(255,255,255,0.7);
	font-style: normal;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 9px;
	letter-spacing: 1px;
	padding-top: 4px;
	font-family: 'Open Sans', Arial, sans-serif;
}

.ch-info p a:hover {
	color: rgba(255,242,34, 0.8);
}

.ch-item:hover {
	box-shadow:
		inset 0 0 0 1px rgba(255,255,255,0.1),
		0 1px 2px rgba(0,0,0,0.1);
}

.ch-item:hover .ch-info {
	transform: scale(1);
	opacity: 1;
}


.ch-item:hover .ch-info p {
	opacity: 1;
}

.texto-dimensoes
{
	font-size: 26px;
	margin: 20px 0 80px 0px;
	font-family: 'Open Sans';
	color: #444;
}

.sub-titulo-444
{
	text-align: center;
	padding: 20px 140px 80px 140px;
	font-family: 'Open Sans';
	font-size: 26px;
	color: #444;
}

.sub-titulo-texto
{
	text-align: center;
	font-family: 'Open Sans';
	font-size: 18px;
	color: #444;
}


/********************************************************************/

/* Bloco C.A.S.A */

.img-casa
{
	width: 100%;
	height: 400px;
}

.sub-titulo-processo
{
	color: #FFF;
	font-family: 'Open Sans';
	font-size: 26px;
	text-align: justify;
	padding: 0px 30px 20px 30px;
}

.sub-titulo-crescimento
{
	color: #FFF;
	font-family: 'Open Sans';
	font-size: 26px;
	text-align: justify;
	padding: 0px 30px 20px 30px;
}

.rotate:hover
{
    -webkit-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
    -webkit-transition: -webkit-transform 0.5s ease-in;
}

.rotate-100:hover
{
    -webkit-transform: rotateZ(-100deg);
    -ms-transform: rotateZ(-100deg);
    transform: rotateZ(-100deg);
    -webkit-transition: -webkit-transform 0.5s ease-in;
}

.bloco-icones-smiles
{
	text-align: center;
	margin-top: 60px;
}

.bloco-icone-crescimento
{
	text-align: center;
	margin-top: 60px;
}

.cor-casa
{
	color: #f39c12;
}

.bloco-casa
{
	background-color: #2ecc71;
	margin-top: 60px;
	padding-bottom: 40px;
}

/********************************************************************/
/* Blocos originalidade, missão, criatividade, hoje*/

.blocos
{
	border: 1px solid #27ae60;
	padding: 10px 10px 10px 10px;
	background-color: #2ecc71;
	min-height: 200px;
}

.blocos:hover
{
	opacity: 0.5;
	transition: all 0.4s ease-in-out;
}

.info-blocos
{
	margin-top: 40px;
	padding: 10px 100px 10px 100px;
	min-height: 300px;
}

.info-blocos > p
{
	font-family: 'Opens Sans';
	font-size: 2em;
	color: #444;
}


</style>