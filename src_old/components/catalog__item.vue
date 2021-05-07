<template>
  <div class="catalog__item">
    <img :src=" '..' + product_data.image.url " width="238" height="237px">
    <span class="catalog__item-artikul">{{product_data.code}}</span>
    <h2 class="catalog__item-title">{{product_data.name}}</h2>
    <div class="catalog__item-bottom">
      <div class="catalog__item-prices">
        <span class="catalog__item-oldprice">{{product_data.price.old_price}}</span>
        <span class="catalog__item-newprice">{{product_data.price.current_price}}</span>
      </div>
      <div class="catalog__item-buttons">
        <button class="catalog__add-button"></button>
        <button class="catalog__select-button"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catalog__item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.catalog__item {
  display: flex;
  flex-direction: column;
  width: 22.5%;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
}
</style>
