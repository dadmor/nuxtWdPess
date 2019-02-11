<template>
	<section id="primary" class="content-area">
		<main id="main" class="site-main grid gdw-3">
			<article 
				:class="`post-index${index}`"
				v-for="(post, index) in posts">
				<card-vertical-standard 
					:post="post">	
				</card-vertical-standard>
			</article>
		</main>
		<pagination/>
	</section>
</template>
<script>
	import cardVerticalStandard from '@/layouts/partials/card-vertical-standard.vue';
	import pagination from '@/layouts/partials/pagination.vue';
	import {mapState} from 'vuex';
	export default {
		props:['pageLayout'],
		mounted() {
			this.$store.dispatch('posts/getPosts', this.$route.params) 
		},
		computed: {
			...mapState(
				{
					posts: state => {
						return state.posts.posts
					},
				}
			)
		},
		components: {
			cardVerticalStandard,
			pagination
		}
	}
</script>

			
