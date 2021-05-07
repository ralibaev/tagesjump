<template>
  <div class="container catalog">
    <div class="catalog__list">
      <catalog__item
        v-for="product in this.$store.state.products"
        :key="product.id"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
import catalog__item from './catalog__item.vue'
import {mapActions} from 'vuex'
export default {
  name: 'catalog',
  components: {
    catalog__item
  },
  props: {},
  data() {
    return {

    }
  },
  computed: {},
  methods: {
    ...mapActions([
      'GET_PRODUCTS'
    ])
  },
  mounted() {
    this.GET_PRODUCTS()
  }
}
</script>

<style>
.catalog__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
