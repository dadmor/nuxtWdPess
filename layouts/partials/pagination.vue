<template>
  <ul class="pagination">
      <li v-for="item in this.getItems()">
        <nuxt-link :to="{ params: { page: item.page }}">
          {{item.page}}
        </nuxt-link>
      </li>
  </ul>
</template>

<script>
export default {
  props:['store'],
  methods: {
    getItems(){
      const total = this.$store.state.posts.total, 
      current = this.$store.state.posts.current ? this.$store.state.posts.current : 1,
      max = 7,
      start = ( current - Math.floor( max/2 ) > 1 ) ? current - Math.floor( max/2 ) : 1;
      let items = [];
      for (let index = start; index < max + start; index++) {
        items.push({page:index});
      }
      return items;
    }
  }
}
</script>