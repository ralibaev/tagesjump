<template>
  <div class="container breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item">
        <a href="#">Главная</a>
      </li>
      <li class="breadcrumbs__item">
        <a href="#">Системы хранения</a>
      </li>
      <li class="breadcrumbs__item">
        <a>Комплекты стеллажных систем</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'breadcrumbs'
}
</script>

<style>
.breadcrumbs__list {
  display: flex;
  padding: 0;
  list-style: none;
}
.breadcrumbs__item a { text-decoration: none;}
.breadcrumbs__item a[href^="#"] {
  color: #828282;
}
.breadcrumbs__item a[href^="#"]:hover {
  color: black;
}
.breadcrumbs__item::after {
  content: '/';
  margin: 0 10px;
}
.breadcrumbs__item:last-child::after {
  content: none;
}
</style>
