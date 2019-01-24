<template>
	<section id="primary" class="content-area">
		<main id="main" class="site-main grid d-three">
			<article v-for="post in posts">
				<card-standard :post="post"></card-standard>
			</article>
		</main>
		<pagination/>
	</section>
</template>
<script>
	import cardStandard from '@/layouts/partials/card-standard.vue';
	import pagination from '@/layouts/partials/pagination.vue';
	import {mapState} from 'vuex';
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
		mounted() {
			this.$store.dispatch('posts/getPosts', this.$route.params) 
		},
		computed: {
			...mapState({posts: state => {
				return state.posts.posts
			}})
		},
		components: {
			cardStandard,
			pagination
		}
	}
</script>