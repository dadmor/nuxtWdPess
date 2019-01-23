<template>
	<figure 
		v-if="post._embedded['wp:featuredmedia']"
		class="panoramic-img">
		<img :src="post._embedded['wp:featuredmedia'][0].source_url">
		<div
		class="n0img-space" 
		v-if="!post._embedded['wp:featuredmedia']">&nbsp;</div>
	</figure>
</template>
<script>
	export default {
		props: ['post'],
		mounted() {
			// sort thumbnails by width
			// console.log(this.post._embedded['wp:featuredmedia'][0].media_details.sizes);
			// console.log(this.$el.clientWidth);
			// console.log(this.$el.clientHeight);
		},
	}
</script>