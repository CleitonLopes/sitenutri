
<script>

</script>

<template>

	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container-fluid">

			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Nutri Healfcoach</a>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a id="dLabel" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							A Nutri Healfcoach <span class="caret"></span>
						</a>
						<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
							<li><a href="#">Nossa História</a></li>
							<li><a href="#">Quem Somos</a></li>
							<li class="divider"></li>
							<li class="dropdown-submenu">
								<a tabindex="-1" href="#">Hover me for more options</a>
								<ul class="dropdown-menu">
									<li><a tabindex="-1" href="#">Second level</a></li>
									<li class="dropdown-submenu">
										<a href="#">Even More..</a>
										<ul class="dropdown-menu">
											<li><a href="#">3rd level</a></li>
											<li><a href="#">3rd level</a></li>
										</ul>
									</li>
									<li><a href="#">Second level</a></li>
									<li><a href="#">Second level</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="dropdown">
						<a id="dLabel" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							Teste <span class="caret"></span>
						</a>
						<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
							<li><a href="#">Some action</a></li>
							<li><a href="#">Some other action</a></li>
							<li class="divider"></li>
							<li class="dropdown-submenu">
								<a tabindex="-1" href="#">Hover me for more options</a>
								<ul class="dropdown-menu">
									<li><a tabindex="-1" href="#">Second level</a></li>
									<li class="dropdown-submenu">
										<a href="#">Even More..</a>
										<ul class="dropdown-menu">
											<li><a href="#">3rd level</a></li>
											<li><a href="#">3rd level</a></li>
										</ul>
									</li>
									<li><a href="#">Second level</a></li>
									<li><a href="#">Second level</a></li>
								</ul>
							</li>
						</ul>
					</li>

					<li class="dropdown">
						<a id="dLabel" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							Teste <span class="caret"></span>
						</a>
						<ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
							<li><a href="#">Some action</a></li>
							<li><a href="#">Some other action</a></li>
							<li class="divider"></li>
						</ul>
					</li>

					<li>
						<a href="#">Blog</a>
					</li>

					<li>
						<a href="#">Contato</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

</template>

<style>

.navbar-default
{
	background-color: #fff;
}

.navbar-default .navbar-nav>li>a
{
	font-size: 16px;
	color: #00AFAB;
	font-family: sans-serif;
	font-weight: bold;
}

.navbar
{
	height: 120px;
	padding-top: 30px;
	background-color: #FFF;
	border-color: none;
}


.navbar-brand
{
  color: #00AFAB !important;
  font-size: 24px;
}

.navbar-right
{
	padding-right: 280px !important;
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


</style>