<template>
	<figure 
		v-if="post._embedded['wp:featuredmedia']"
		class="panoramic-img">
		<img 
			:alt="getAlt()"
			:src="img"
			:srcset="getSrcset('src')"
			:sizes="getSrcset('sizes')">
		<div
		class="n0img-space" 
		v-if="!post._embedded['wp:featuredmedia']">&nbsp;</div>
	</figure>
</template>
<script>
	export default {
		props: ['post'],
		data: function () {
			return {
				img: ""
			}
		},
		mounted(){
			this.img = this.getMain(this.$el.clientWidth);
		},
		methods: {
			getMain(elementWidth){
				if(this.post._embedded['wp:featuredmedia'][0]){ 
					let o = Object.values(this.post._embedded['wp:featuredmedia'][0].media_details.sizes).sort(function(a, b){
						return a.width-b.width
					})
					for (let i in o) {
						if(elementWidth < o[i].width){
							return o[i].source_url;
						}
					}
				}
			},
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

		},
	}
</script>