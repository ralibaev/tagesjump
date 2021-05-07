<template>
  <div class="container catalog">
    <div class="catalog__select-blocks">
      <div class="catalog__select-block">
        <span>Сортировать по</span>
        <select class="catalog__select" name="select-price">
          <option value="1">Цена по возрастанию</option>
          <option value="2">Цена по убыванию</option>
        </select>
      </div>
      <div class="catalog__select-block">
        <span>Материал</span>
        <select class="catalog__select" name="select-material">
          <option value="1">Металл</option>
          <option value="2">Дерево</option>
        </select>
      </div>
    </div>
    <div class="catalog__list">
      <catalog__item
        v-for="product in products"
        :key="product.id"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
import catalog__item from './catalog__item.vue'
export default {
  name: 'catalog',
  components: {
    catalog__item
  },
  data() {
    return {
      products: [
        {
          "id": "1",
          "name": "Ручка дверная",
          "code": "L422WH",
          "price": {
            "old_price": "400₽",
            "current_price": "355₽"
          },
          "image": {
            "url": "/pic/pic1.png"
          },
          "material": 1
        },
        {
          "id": "2",
          "name": "Ручка, нержавеющ сталь",
          "code": "L423WH",
          "price": {
            "old_price": "401₽",
            "current_price": "356₽"
          },
          "image": {
            "url": "/pic/pic2.png"
          },
          "material": 2
        },
        {
          "id": "3",
          "name": "Стандартные петли",
          "code": "P424WN",
          "price": {
            "old_price": null,
            "current_price": "75₽"
          },
          "image": {
            "url": "/pic/pic3.png"
          },
          "material": 2
        },
        {
          "id": "4",
          "name": "Петля со стопором",
          "code": "PW5AC",
          "price": {
            "old_price": "270₽",
            "current_price": "200₽"
          },
          "image": {
            "url": "/pic/pic4.png"
          },
          "material": 2
        },
        {
          "id": "5",
          "name": "Ручка дверная",
          "code": "LM352",
          "price": {
            "old_price": null,
            "current_price": "720₽"
          },
          "image": {
            "url": "/pic/pic1.png"
          },
          "material": 1
        },
        {
          "id": "6",
          "name": "Ручка, нержавеющ сталь",
          "code": null,
          "price": {
            "old_price": null,
            "current_price": "355₽"
          },
          "image": {
            "url": "/pic/pic2.png"
          },
          "material": 2
        },
        {
          "id": "7",
          "name": "Стандартные петли",
          "code": "WD14LK",
          "price": {
            "old_price": null,
            "current_price": "75₽"
          },
          "image": {
            "url": "/pic/pic3.png"
          },
          "material": 2
        },
        {
          "id": "8",
          "name": "Петля со стопором",
          "code": null,
          "price": {
            "old_price": "1200₽",
            "current_price": "900₽"
          },
          "image": {
            "url": "/pic/pic4.png"
          },
          "material": 2
        }
      ],
      materials: [
        {
          "id": "1",
          "name": "Дерево"
        },
        {
          "id": "2",
          "name": "Металл"
        }
      ]
    }
  }
}
</script>

<style>
.catalog__select-blocks {
  display: flex;
  margin-top: 40px;
}
@media (max-width: 660px) {
  .catalog__select-blocks {
    flex-direction: column;
  }
}
.catalog__select-block {
  display: flex;
  flex-direction: column;
  line-height: 1.5em;
}
.catalog__select-block span {
  margin-left: 15px;
  font-size: 12px;
}
.catalog__select {
  width: 288px;
  height: 40px;
  margin-right: 25px;
  padding-left: 15px;
  font-size: 14px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("/pic/arrow.svg") no-repeat center right 15px #f2f2f2;
}
.catalog__list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
@media (max-width: 600px) {
  .catalog__list {
    justify-content: center;
  }
}
</style>
