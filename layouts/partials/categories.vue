<template>
	<span class="cat-links">
		<nuxt-link 
			v-for="term in post._embedded['wp:term'][0]"
			:to="`/category/${term.slug}/${term.id}`">{{term.name}}</nuxt-link>
	</span>
</template>
<script>
	export default {
		props: ['post']
	}
</script>