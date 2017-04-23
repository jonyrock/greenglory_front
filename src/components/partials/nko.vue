<template>
  <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
      <h4>{{ item.name }}</h4>
      <p>
        {{ item.address }} <br>
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
