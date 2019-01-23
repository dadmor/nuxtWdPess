<template>
	<div>
		<header class="entry-header">
			<categories :post="post" />
			<span v-if="post._embedded.author[0]">
				author: {{ post._embedded.author[0].name }}
			</span>
		</header>
		<smart-thumbnail :post="post" />
		<h2 
			class="entry-title"
			v-html="post.title.rendered">
		</h2>
		<div 
			class="entry-content"
			v-html="this.trim(post.excerpt.rendered)">
		</div>
	</div>
</template>
<script>
	import categories from '@/layouts/partials/categories.vue';
	import smartThumbnail from '@/layouts/partials/smart-thumbnail.vue';
	import themeHelpers from '@/assets/themeHelpers.js'
	export default {
		props: ['post'],
		methods: {
        	trim(text) {
				return themeHelpers.truncate(text, 30, '...');
			}
		},
		components: {
			categories,
			smartThumbnail,
			themeHelpers
		}
	}
</script>