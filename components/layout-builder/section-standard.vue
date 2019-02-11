<template>
	<transition name="fade">
	<div 
		id="builder-section-standard" 
		:class="[`gdwSpan-${me.pageLayout.width}`]">

		<div class="builder-section-item">
			<div class="section-item-image">IMG</div>
			<div class="section-item-content">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<div class="builder-section-item">
			<div class="section-item-image">IMG</div>
			<div class="section-item-content">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<div class="builder-section-item">
			<div class="section-item-image">IMG</div>
			<div class="section-item-content">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<div class="builder-section-pagina">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
		</div>
		<b-item-sizer :me="me"/>
	</div>
</transition>
</template>
<script>
	import bItemSizer from '@/components/layout-builder/item-sizer.vue';
	export default {
		props: ['me'],
		components: {
			bItemSizer,
		}
	}
</script>
<style>
	#builder-section-standard{
		margin:5px;
		border:1px solid #dedede;
		background-color: #e7e7e7;
		padding: 5px 5px 0 5px;
		min-width:100px;
		position:relative;
	}
	#builder-section-standard .builder-section-item{
		display:flex;
	}
	#builder-section-standard .section-item-image{
		flex:1;
		margin:0 2px 2px 0;
		background-color: #aaa;
		padding:5px 6px;
		color:#fff;
		font-size:11px;
		text-align: center;
	}
	#builder-section-standard .section-item-content{
		flex:4;
		padding-bottom: 4px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		min-width:50px;
	}
	#builder-section-standard .section-item-content > *{
		background-color: #ccc;
		flex:1;
		margin-bottom:1.5px;
	}
	#builder-section-standard .builder-section-pagina{
		display: flex;
		justify-content: center;
		font-size:0.2em;
		margin-bottom:2px;
	}
	#builder-section-standard .builder-section-pagina > *{
		background-color: #aaa;
		padding:3px 4px;
		margin:1px 0 1px 1px;
		color:#fff;
	}
</style>