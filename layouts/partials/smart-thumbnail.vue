<template>
	<figure 
		v-if="post._embedded['wp:featuredmedia']"
		class="panoramic-img">
		<nuxt-link :to="`/post/${post.slug}/${post.id}`">
			<img 
				:alt="getAlt()"
				:src="post._embedded['wp:featuredmedia'][0].source_url"
				:scrset="getSrcset('scr')"
				:sizes="getSrcset('sizes')"
				/>
		</nuxt-link>
		<div
		class="n0img-space" 
		v-if="!post._embedded['wp:featuredmedia']">&nbsp;</div>
	</figure>
</template>
<script>
	export default {
		props: ['post'],
		methods: {
			getSrcset(type){
				let set = {scr:'',sizes:''};
				if(this.post._embedded['wp:featuredmedia'][0]){
					for (let i in this.post._embedded['wp:featuredmedia'][0].media_details.sizes) {

						set.scr += this.post._embedded['wp:featuredmedia'][0].media_details.sizes[i].source_url+' '+this.post._embedded['wp:featuredmedia'][0].media_details.sizes[i].width+'w,';

						set.sizes += this.post._embedded['wp:featuredmedia'][0].media_details.sizes[i].width+'px,';
					}
				}
				return set[type];
			},
			getAlt(){
				const alt = this.post._embedded['wp:featuredmedia'][0].alt_text;
				if(alt){
					return alt
				}else{
					return this.post._embedded['wp:featuredmedia'][0].slug;
				}
			}
		}
	}
</script>