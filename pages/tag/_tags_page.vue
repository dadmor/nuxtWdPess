<template>
	<div id="content" 
		v-if="layout"
		:class="[
			'site-content', 
			'grid', 
			`gdw-${layout.pages[$route.name.split('-')[0]].sectionsProps.width}`
			]">
		<section-standard 
			v-if="layout"
			v-for="pageLayout in layout.pages[$route.name.split('-')[0]].sections"
			:pageLayout="pageLayout" />
	</div>
</template>
<script>
	import sectionStandard from '@/layouts/partials/section-standard.vue';
	import {mapState} from 'vuex';
	import themeHelpers from '@/assets/themeHelpers.js'
	export default {
		transition: 'fade',
		head() {
			return {
				bodyAttrs: {
					class: 'home blog',
				},
				title: 'Newests article - noblock axios store',
				meta: [
					{ 
						name: 'description', 
						content: 'This is my about description here.'
					},
					{ 
						name: 'keywords', 
						content: 'about nuxt, nuxt info'
					},
				]
			}
		},
		computed: {
			...mapState(
				{
					layout: state => {
						return state.layout
					}
				}
			)
		},
		components: {
			sectionStandard,
			themeHelpers
		}
	}
</script>