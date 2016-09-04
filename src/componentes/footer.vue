
<script>

	export default{

		data(){

			return{

			}
		},

		methods: {

		}
	}


</script>

<template>

	<div>

		<footer>
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
						<div class="row">
							<div class="col-xs-12">
								<div class="titulo-footer">Missao</div>
								<div class="hr"></div>

								<div class="texto-footer">
									Realizar um trabalho com propósito que realmente traga sentido ao desenvolvimento humano.
								</div>
							</div>

							<div class="col-xs-12">
								<div class="titulo-footer">Valores</div>
								<div class="hr"></div>

								<div class="texto-footer">
									Empatia, respeito a diversidade humana e aperfeiçoamento continuo.
								</div>
							</div>

							<div class="col-xs-12">
								<div class="titulo-footer">Meta</div>
								<div class="hr"></div>

								<div class="texto-footer">
									Proporcionar o processo de mudança comportamental e equilibrio na vida pessoal e profissional,
									através dos talentos, habilidades e competências do cliente.
								</div>
							</div>

							<div class="col-xs-12">
								<div class="titulo-footer">Visão</div>
								<div class="hr"></div>

								<div class="texto-footer">
									Ser reconhecida como uma empresa que busca o despertar de cada um nas seis dimensões da vida intelectual,
									corporal, financeiro, emocional, social e espiritual.
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
						<div class="titulo-footer">
							Mapa do site
						</div>
						<div class="hr"></div>
						<div class="mapa-site">
							<p><a href="#inicio">Nutrihealthcoach</a></p>
							<p><a href="#coach">Coach</a></p>
							<p><a href="#workshop">Workshop</a></p>
							<p><a href="#programas">Programas</a></p>
							<p><a href="#projetodevida">Projeto de Vida</a></p>
							<p><a href="#acelerese">Acelere-se</a></p>
							<p><a href="#blog">Blog</a></p>
							<p><a href="#contato">Contato</a></p>
						</div>
					</div>

					<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">

						<div class="titulo-footer">
							Newlaster
						</div>
						<div class="hr"></div>

						<div class="thumbnail center well well-sm">


							<div class="texto-newlaster">
								Se inscreva em nossa newlaster para saber das mais recentes informações do nosso site e blog.
							</div>

							<form action="" method="post" role="form">
								<div class="input-group">
									<span class="input-group-addon">
										<i class="fa fa-envelope"></i>
									</span>
									<input class="form-control" type="text" id="" name="" placeholder="seu@email.com">
								</div>
								<input type="submit" value="Inscreva-se" class="btn btn-large btn-success margin-top-20">
							</form>
						</div>


						<div class="titulo-footer">
							Posts Recentes
						</div>
						<div class="hr"></div>

						<div class="thumbnail">
							<div class="caption">
								<h3>Titulo Blog</h3>
								<p class="texto-blog">Isso é um teste de post do blog</p>
								<a href="#" class="btn btn-success" role="button">Ver mais</a>
							</div>
						</div>

					</div>

					<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
						<div class="titulo-footer">
							Siga a gente nas redes sociais.
						</div>

						<div id="fb-root"></div>
						<div class="fb-page" data-href="wwww.facebook.com/nutrihealthcoach/" data-tabs="timeline" data-small-header="false" data-width="500" data-adapt-container-width="true" data-hide-cover="false" 		 data-show-facepile="true">
							<blockquote cite="https://pt-br.facebook.com/nutrihealthcoach/" class="fb-xfbml-parse-ignore">
								<a href="https://pt-br.facebook.com/nutrihealthcoach/">Nutrihealthcoach</a>
							</blockquote>
						</div>
					</div>

				</div>

			</div>

		</footer>

		<div class="direitos-background">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="direitos">
							<a href="http://www.onwebsites.com.br" target="_blank">Desenvolvido por onwebsites.com.br</a>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<style scoped>

footer
{
	background-repeat: no-repeat;
	background:url(../assets/img/carousel.jpg);
	margin-top: 40px;
	color: #FFF;
	padding-top: 50px;
	padding-bottom: 50px;
	height: 100%;
	width: 100%;
}

.titulo-footer
{
	font-family: 'vertigo';
	font-size: 2em;
}

.sub-titulo-footer
{
	font-family: 'vertigo' !important;
	font-size: 2em;

}

.texto-footer
{
	font-family: 'Open Sans' !important;
	color: #FFF;
	font-size: 1em;
	margin-top: 10px;
}

.texto-newlaster
{
	font-family: 'Open Sans';
	font-size: 1.5em;
}

.well
{
	background-color: transparent;
	border: 1px solid #fff;
}

h3
{
	color: #fff;
}

.texto-blog
{
	text-align: justify;
	font-family: 'Open Sans';
	font-size: 1em;
}

.thumbnail
{
	background-color: transparent !important;
}

.hr
{
	width: 20px;
	color: #FFF;
	margin-top: 5px;
	margin-bottom: 5px;
	border-top: 1px solid #fff;
}

.icones-sociais
{
	text-align: left;
	margin-top: 10px;
}

.icones-sociais > a > i
{
	color:#FFF;
	padding-left: 5px;
}

.icones-sociais > a > i:hover
{
	opacity: 0.5;
}

.mapa-site > p
{
	font-size: 1em;
}

.mapa-site > p > a
{
	text-decoration: none;
	color: #fff;
}

.mapa-site > p > a:hover
{
	text-decoration: none;
	opacity: 0.5;
}

.direitos
{
	margin: 20px 0 0 20px;
	text-align: center;
	font-size: 1.5em;
	font-family: arial;
}

.direitos a:link, a:visited
{
	text-decoration: none;
	color: #444;
}

.direitos a:hover
{
	opacity: 0.5;
}

</style>