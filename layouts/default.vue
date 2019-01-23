<template>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#content">
			Przeskocz do treści
		</a>
		<header id="masthead" class="site-header">
			<div class="site-branding-container">
				<div class="site-branding">
						<h1 class="site-title">
							<a href="http://mroczna.stronazen.pl/rest/" rel="home">
								WP switch to APPlication
							</a>
						</h1>
						<p class="site-description">
							Try WordPress full PWA theme online
						</p>
				</div>
			</div>
		</header>
		<navigation/>
		<div id="content" class="site-content">
			<nuxt/>
		</div>
		<footer id="colophon" class="site-footer">
				<div class="site-info">
						<a class="site-name" href="http://mroczna.stronazen.pl/rest/" rel="home">REST sandbox</a>,
						<a href="https://pl.wordpress.org/" class="imprint">
							Proudly powered by WordPress.
						</a>
				</div><!-- .site-info -->
		</footer>
	</div>
</template>
<script>
	import navigation from './partials/navigation.vue';
	export default {
		components: {
			navigation
		}
	}
</script>
<style>
</style>
