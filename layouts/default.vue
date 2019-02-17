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
		</header><!-- .site-header -->
		<navigation/>
		<!-- THIS NUXT ROUTE TO PAGE -->
		<nuxt/>
		<footer id="colophon" class="site-footer">
				<div class="site-info">
						<a class="site-name" href="http://mroczna.stronazen.pl/rest/" rel="home">REST sandbox</a>,
						<a href="https://pl.wordpress.org/" class="imprint">
							Proudly powered by WordPress.
						</a>
				</div><!-- .site-info -->
		</footer>
		<!-- builder component -->
		<component :is="layout.builder"/>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	import navigation from '@/layouts/partials/navigation.vue';
	/* Builder components */
	import standBy from '@/components/layout-builder/stand-by.vue';
	import layoutBuilder from '@/components/layout-builder.vue';
	import sectionOptions from '@/components/layout-builder/section-options.vue';
	/* !Builder components */
	export default {
		components: {
			navigation,
			layoutBuilder,
			sectionOptions,
			standBy
		},
		computed: {
			...mapState(
				{
					layout: state => {
						return state.layout
					},
				}
			),
		},
	}
</script>
<style>
</style>

