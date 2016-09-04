
<script>

	export default {
		data() {

			return {

				dom: {

					navbar: ''
				}
			}
		},

		methods: {
			trocaCorNavbar(ev, cor)
			{

				'use strict';

				var self = this;

				document.getElementById("navbar").style.backgroundColor = cor[0];
				document.getElementById("header-inicial").style.backgroundColor = cor[1];

				$('#navbar, #header-inicial').fadeTo("slow", 0.5);
				$('#navbar, #header-inicial').fadeTo("slow", 0.9);

			}

		}
	}

</script>

<template>

	<div id="header-inicial">
		<div class="container">

			<div class="row bloco-header">
				<div class="col-xs-12-col-sm-4 col-md-4 col-lg-4">
					<div class="icones-header">
						<div class="icones-sociais">
							<a href=""><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
							<a href=""><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
							<a href=""><i class="fa fa-google-plus-square fa-2x" aria-hidden="true"></i></a>
							<a href=""><i class="fa fa-skype fa-2x" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>

				<div class="col-xs-12-col-sm-4 col-md-4 col-lg-4 text-center">
					<h6>Telefone: (14) xxxx-xxxx</h6>
					<h6>Whats: (14) xxxxx-xxxx</h6>
				</div>

				<div class="col-xs-12-col-sm-4 col-md-4 col-lg-4 text-right margin-top-10">
					<button type="button" class="btn btn-default btn-small">Entre/Cadastre-se</button>
				</div>

			</div>
		</div>
	</div>

	<nav id="navbar" class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand page-scroll" href="#home">
					<a class="navbar-brand" href="#">Nutri Healfcoach</a>
				</a>
			</div>

			<!-- NUTRIHEALTH -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a id="dLabel" v-link="{ path: '/nutrihealth' }" v-on:click="trocaCorNavbar($event, ['#2ecc71', '#27ae60'])" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							Nutrihealfthcoach <span class="caret"></span>
						</a>
						<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
							<li><a href="#">Nossa História</a></li>
							<li><a href="#">Quem Somos</a></li>
							<li><a href="#">Dimensões</a></li>

						</ul>
					</li>

					<!-- COACH -->
					<li class="dropdown">
						<a id="dLabel" v-link="{ path: '/coach' }" v-on:click="trocaCorNavbar($event, ['#3498db', '#2980b9'])" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							Coach <span class="caret"></span>
						</a>
						<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
							<li><a href="#">Método C.A.S.A</a></li>
							<li><a href="#">Health Life</a></li>
							<li><a href="#">Carreira</a></li>
							<li><a href="#">Empreender</a></li>
							<li><a href="#">Executivo</a></li>
							<li><a href="#">Businnes</a></li>
						</ul>
					</li>

					<!-- WORKSHOP -->
					<li class="dropdown">
						<a id="dLabel" v-link="{ path: '/workshop' }" v-on:click="trocaCorNavbar($event, ['#9b59b6', '#8e44ad'])" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							Workshop <span class="caret"></span>
						</a>
						<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
							<li><a href="#">Autoconhecimento</a></li>
							<li><a href="#">Empoderamento Feminino</a></li>
							<li><a href="#">Empreendedorismo</a></li>
							<li><a href="#">Emagrecer com Saude</a></li>
						</ul>
					</li>

					<!-- PROGRAMAS -->
					<li class="dropdown">
						<a id="dLabel" v-link="{ path: '/programas' }" v-on:click="trocaCorNavbar($event, ['#1abc9c', '#16a085'])" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							Programas <span class="caret"></span>
						</a>
					</li>

					<!-- PROJETO DE VIDA -->
					<li class="dropdown">
						<a id="dLabel" v-link="{ path: '/projetodevida' }" v-on:click="trocaCorNavbar($event, ['#e67e22', '#d35400'])" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							Projeto de Vida <span class="caret"></span>
						</a>
					</li>

					<!-- ACELE-SE -->
					<li class="dropdown">
						<a id="dLabel" v-link="{ path: '/acelerese' }" v-on:click="trocaCorNavbar($event, ['#e74c3c', '#c0392b'])" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							Acelere-se <span class="caret"></span>
						</a>
						<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
							<li><a href="#">Produtividade Express</a></li>
							<li><a href="#">Carreira Express</a></li>
							<li><a href="#">Empreendedorismo</a></li>
							<li><a href="#">Liderança Express</a></li>
						</ul>
					</li>

					<!-- BLOG -->
					<li>
						<a v-link="{ path: '/blog' }" v-on:click="trocaCorNavbar($event, ['#e67e22', '#d35400'])">Blog</a>
					</li>

					<!-- CONTATO -->
					<li>
						<a v-link="{ path: '/contato' }" v-on:click="trocaCorNavbar($event, ['#34495e', '#2c3e50'])">Contato</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

</template>

<style scoped>

.bloco-header
{
	width: 100%;
	min-height: 60px;
	color: #fff;
}

#header-inicial
{
	background-color: #27ae60;
}

.navbar-default
{
	background-color: #fff;
}

.navbar-default .navbar-nav>li>a
{
	font-size: 14px;
	color: #FFF;
	font-family: sans-serif;
	font-weight: bold;
}

.navbar
{
	min-height: 80px;
	padding-top: 15px;
	background-color: #2ecc71;
	border-color: transparent;
	margin-bottom: 0;
	z-index: 1;
}

.navbar-brand
{
  color: #FFF !important;
  font-size: 18px;
}

.dropdown-menu>li>a
{
	color: #444;
}

.navbar-default .navbar-nav>.open>a
{
	background-color: #fff;
}

.navbar-default .navbar-toggle .icon-bar {
    background-color: #444;
}

.navbar-default .navbar-toggle {
	border-color: transparent;
}

@media (max-width: 767px){
	.navbar-default .navbar-nav>li>a
	{
		color: #444;
		margin-left: 0px;
	}
}

@media (max-width: 767px){
	.navbar-default .navbar-collapse
	{
		background-color: #FFF;
		color: #444
	}
}


@media (max-width: 767px){
	.navbar-default .navbar-nav .open .dropdown-menu>li>a {
		color: #444;
	}
}

.navbar-brand
{
    position: absolute;
    width: 100%;
    left: 0;
    text-align: left;
    padding-left: 40px !important;
}
.navbar-toggle {
    z-index:3;
}


.dropdown-submenu {
    position: relative;
}


.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
    background-color: #000;
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}

/* header inicial */
.icones-header .icones-sociais
{
	text-align: left;
	margin-top: 10px;
}

.btn-default
{
	background-color: transparent;
	color: #fff;
	border-color: #fff;
}

.btn-default:hover
{
	background-color: transparent;
	color: #fff;
	border-color: #fff;
	opacity: 0.8;
}

.icones-sociais a
{
	text-decoration: none;
	color: #fff;
}

.icones-sociais a:hover
{
	color: #fff;
	opacity: 0.6;
}


</style>