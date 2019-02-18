<template>
	<div id="builder-item-sizer">
		<div class="sizer-top" @click="sizerUp()">
			<img src="@/assets/svg-ico/up-chevron.svg"/>
		</div>
		<div class="sizer-right" @click="sizerRight()">
			<img src="@/assets/svg-ico/right-chevron.svg"/>
		</div>
		<div class="sizer-bottom" @click="sizerDown()">
			<img src="@/assets/svg-ico/down-chevron.svg"/>
		</div>
		<div class="sizer-left" @click="sizerLeft()">
			<img src="@/assets/svg-ico/left-chevron.svg"/>
		</div>
		<div class="sizer-options" @click="runOptions()">
			<img src="@/assets/svg-ico/cog.svg"/>
		</div>
	</div>	
</template>
<script>
	import {mapState} from 'vuex';
	export default {
		computed: {
			...mapState(
				{
					layout: state => {
						return state.layout
					}
				}
			)
		},
		props: ['me'],
		methods: {
			sizerUp(){
				console.log('upSpan');
			},
			sizerDown(){
				console.log('downSpan');
			},
			sizerLeft(){
				var decrement = this.layout.pages[this.layout.pageName].sections[this.me.index].width;
				if(decrement > 1){
					decrement--;
				}
				this.$store.dispatch('layout/set',{
					p: ['sectionIndex'],
					v: this.me.index
				})
				this.$store.dispatch('layout/set',{
					p: ['pages',this.layout.pageName,'sections',this.me.index,'width'],
					v: decrement
				})
			},
			sizerRight(){
				var increment = this.layout.pages[this.layout.pageName].sections[this.me.index].width;
				increment++;

				this.$store.dispatch('layout/set',{
					p: ['sectionIndex'],
					v: this.me.index
				})
				this.$store.dispatch('layout/set',{
					p: ['pages',this.layout.pageName,'sections',this.me.index,'width'],
					v: increment
				})
			},
			runOptions(){
				this.$store.dispatch(
					'layout/set',{
					p: ['setSection'],
					v: this.me.index
				})
				this.$store.dispatch(
					'layout/set',{
					p: ['builder'],
					v: 'section-options'
				})
			}
		},
		components: {

		}
	}
</script>
<style>
	#builder-item-sizer{
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
	}
	#builder-item-sizer > *{
		position:absolute;
		width:30px;
		height:30px;
		background:#6df3d699;
		border-radius: 3px;
		border:1px solid #32a48b;
		cursor:pointer;
	}
	#builder-item-sizer img{
		width:60%;
		margin:20%;
		opacity:0.5;
	}
	.sizer-top{
		top:3px;
		left:calc(50% - 15px);
	}
	.sizer-bottom{
		bottom:3px;
		left:calc(50% - 15px);
	}
	.sizer-left{
		left:3px;
		top:calc(50% - 15px);
	}
	.sizer-right{
		right:3px;
		top:calc(50% - 15px);
	}
	.sizer-options{
		left:calc(50% - 15px);
		top:calc(50% - 15px);
	}
</style>