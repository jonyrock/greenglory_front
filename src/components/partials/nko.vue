<template>
  <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
      <h4>{{ item.name }}</h4>
      <p>
        {{ item.address }} <br><br>
        {{ item.region }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
h4 {
  font-size: 16px;
}
p {
  font-size: 13px;
}
</style>
