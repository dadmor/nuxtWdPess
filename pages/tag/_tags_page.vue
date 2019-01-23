<template>
	<section id="primary" class="content-area">
		<main id="main" class="site-main grid d-three">
			<article v-for="post in posts">
				<card-standard :post="post"></card-standard>
			</article>
		</main>
		<ul class="pagination">
			<li><nuxt-link to="/tag/name/1">1</nuxt-link></li>
			<li><nuxt-link to="/tag/name/2">2</nuxt-link></li>
			<li><nuxt-link to="/tag/name/3">3</nuxt-link></li>
			<li><nuxt-link to="/tag/name/4">4</nuxt-link></li>
			<li><nuxt-link to="/tag/name/5">5</nuxt-link></li>
		</ul>
	</section>
</template>
<script>
	import cardStandard from '@/layouts/partials/card-standard.vue';
	import {mapState} from 'vuex';
	export default {
		head() {
			return {
					title: 'Newests article - noblock axios store',
					meta: [
							{ name: 'description', content: 'This is my about description here.'},
							{ name: 'keywords', content: 'about nuxt, nuxt info'},
					]
			}
		},
		mounted() {
			this.$store.dispatch('posts/get', this.$route.params) 
		},
		computed: {
			...mapState({posts: state => {
				return state.posts.posts
			}})
		},
		components: {
			cardStandard
		}
	}
</script>