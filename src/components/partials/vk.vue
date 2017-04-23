<template>
  <div class="row holder">
    <div class="col-xs-6 col-xs-offset-1">
      <h4> {{ item.name }} </h4>
      <a :href="item.url" > {{ item.url }} </a>
      <p>
        {{ item.description }}
      </p>
      <p>
        {{ item.city }}
      </p>

    </div>

    <div class="col-xs-4">
      <img
        src="https://pp.userapi.com/c837439/v837439000/31f74/5jZKgHulrI0.jpg"
      />
    </div>

  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
img {
  width: 100%;
}
</style>
