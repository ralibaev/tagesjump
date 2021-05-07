<template>
  <div class="catalog__item">
    <img class="catalog__item-img" :src=" '..' + product_data.image.url " width="238" height="237px">
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 22%;
  padding: 10px;
  margin-bottom: 50px;
  margin-right: 4%;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
}
@media (min-width: 1101px) {
  .catalog__item:nth-child(4n) {margin-right: 0;}
}
@media (max-width: 1100px) and (min-width: 961px) {
  .catalog__item {
    width: 30%;
    margin-right: 5%;
  }
  .catalog__item:nth-child(3n) {margin-right: 0;}
}
@media (max-width: 960px) and (min-width: 420px) {
  .catalog__item {
    width: 45%;
    margin-right: 10%;
  }
  .catalog__item:nth-child(2n) {margin-right: 0;}
}
@media (max-width: 600px) {
  .catalog__item {
    width: 280px;
    margin-right: 0;
  }
}
.catalog__item:nth-of-type(1)::before, .catalog__item:nth-of-type(2)::before {
  position: absolute;
  left: 0;
  top: 10px;
  padding: 3px 16px;
  content: 'Скидка';
  color: white;
  background-color: #EB5757;
}
.catalog__item-img {
  align-self: center;
}
.catalog__item-artikul {
  margin-top: 20px;
  height: 14px;
  color: #888888;
  font-size: 10px;
  line-height: 14px;
}
.catalog__item-title {
  height: 1.4em;
  margin: 10px 0 0;
  font-size: 16px;
  line-height: 1.4em;
  font-weight: 500;
}
.catalog__item-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
/* .catalog__item-oldprice::after, .catalog__item-newprice::after {
  content: '₽';
} */
.catalog__item-oldprice, .catalog__item-newprice {margin-right: 10px;}
.catalog__item-oldprice {text-decoration: line-through;}
.catalog__add-button {
  width: 20px;
  height: 20px;
  margin-right: 30px;
  background: url("/pic/buy.svg") no-repeat center/18px;
  border: none;
}
.catalog__select-button {
  width: 20px;
  height: 20px;
  background: url("/pic/like.svg") no-repeat center/18px;
  border: none;
}
.catalog__add-button:hover, .catalog__select-button:hover {
  opacity: 0.5;
}
</style>
