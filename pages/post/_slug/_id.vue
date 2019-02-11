<template>
	<div>
		<div class="entry-header">
			<h1 
				v-if="isObj(post)"
				class="entry-title"
				v-html="post.title.rendered"
				>
			</h1> 
		</div>
		<div id="content" class="site-content"> 
			<section 
				class="excerpt-area"
				v-if="isObj(post)"
				v-html="post.excerpt.rendered">
			</section>
			<section 
				id="primary" 
				class="content-area"
				v-if="isObj(post)"
				v-html="post.content.rendered">
			</section>
		</div>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	export default {   
		head() {
			return {
				bodyAttrs: {
					class: 'post-template-default single',
				},
				title: this.isObj(this.post) ? this.post.title.rendered : '',
				meta: [
					{ 
						name: 'description', 
						content: this.isObj(this.post) ? this.post.excerpt.rendered : '',
					},
					{ 
						name: 'keywords', 
						content: 'about nuxt, nuxt info'
					},
				]
			}
		},
		mounted() {
			/* if have posts from past list, find current to render */ 
			this.$store.dispatch('posts/getPost', 
				{
					params:this.$route.params,
					post:this.$store.state.posts.posts.find(x => x.id === parseInt(this.$route.params.id))
				}) 
		},
		computed: {
			...mapState({post: state => {
				return state.posts.post
			}})
		},
		methods: {
			isObj(data){
				return Object.keys(data).length;
			}
		},
		components: {
		}
	}
</script>
