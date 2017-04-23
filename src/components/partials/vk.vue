<template>
  <div class="row holder">
    <div class="col-xs-6 col-xs-offset-1">
      <h4> {{ item.name }} </h4>
      <a :href="item.url" > {{ item.url }} </a>
      <p>
        {{ item.description.substr(0, 150) }}
      </p>
      <p>
        {{ item.city }}
      </p>

    </div>

    <div class="col-xs-4 text-right">
      <img
        :src="item.photo"
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
  width: 150px;
  height: 150px;

}
</style>
