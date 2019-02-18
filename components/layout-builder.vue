<template>
	<div id="layout-builder">
		<div id="sections-builder">
			<div 
				class="section-remove"
				@click="sectionRemoveRow()"
			>- row</div>

			<div class="sections-builder-body">
				<header>
					<div>Sections layout</div>
					<div
						class="close" 
						@click="$store.dispatch(
							'layout/set',{
							p: ['builder'],
							v: 'stand-by'
						}) ">X</div>
				</header>
				
					<main
						:class="[
							'grid', 
							`gd_rows-${layout.pages[thisPage()].sectionsRows}`
							]">
						
							<b-section-standard
								:me="{pageLayout, index}"
								v-if="thisPage"
								:class=""
								v-for="(pageLayout, index) in layout.pages[thisPage()].sections"
							/>
					</main>

				
				<div class="sections-grider">
					<div 
						@click="sectionRemove()"
						>- remove section</div>
					<div 
						@click="sectionAdd()">+ add section</div>
				</div>

			</div>

			<div 
				class="section-add"
				@click="sectionAddRow()">
			+ row</div>
		</div>
		<div class="layer_rows">
			<div
			v-for="n in layout.pages[thisPage()].sectionsRows"
			></div>
		</div>
	</div>
	
</template>
<script>
	import bSectionStandard from '@/components/layout-builder/section-standard.vue';
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
		methods: {
			thisPage(){
				return this.layout.pageName;
			},
			sectionAdd(){
				this.$store.dispatch('layout/addSection', this.$route) 
			},
			sectionRemove(){
				this.$store.dispatch('layout/removeSection', this.$route) 
			},
			sectionAddRow(){
				this.$store.dispatch('layout/addSectionRow', this.$route) 
			},
			sectionRemoveRow(){
				this.$store.dispatch('layout/removeSectionRow', this.$route) 
			},
		},
		components: {
			bSectionStandard,
		}
	}
</script>
<style lang="scss">

	#layout-builder{
		
		position: fixed;
		width: 100%;
		height: 100%;
		left:0;
		top:0;
		background-color: rgba(0,0,0,0.5);
		z-index:100;
		display: flex;
		align-items: center;
		justify-content: center;

		#sections-builder{
			
			display: flex;
			align-items: center;
			position:relative;

			.section-remove{
				background-color: #6df3d6;
				padding: 1em;
				margin: 0.1em;
				cursor:pointer;
				border-radius: 3px 0 0 3px;
			}
			.section-add{
				@extend .section-remove;
				border-radius: 0 3px 3px 0;
			}

			.sections-builder-body{
				background-color: #fff;
				min-width:300px;
				min-height:100px;
				box-shadow: 0 0 5px #404040;
				z-index: 10;
				border-radius: 3px 3px 0 0;

				.close{
					cursor:pointer;
					&:hover {
						background-color:#ccc;
						outline:5px solid #ccc;
					}
				}

				> header{
					display: flex;
					padding:0.7em;
					justify-content: space-between;
					border-bottom:1px dashed #999;
				}	
			}

			.sections-grider{
				display: flex;
				justify-content: space-around;

				> *{
					flex:1;
					border-top: 1px solid #666;
					border-right: 1px solid #666;
					text-align: center;
					line-height: 2.5em;
					cursor:pointer;
				}

				> *:last-of-type{
					border-right: none;
				}
			}
		}
	}
	.layer_rows{
		z-index:-1;
		position:absolute;
		width:100%;
		height:100%;
		display:flex;
		>*{	
			flex:1;
			border-right:1px dashed #999;
			height:100%;
		}
	}
</style>