<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-xs-12">
        <h1>Analytics</h1>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-xs-12">
        <h4>Clusters</h4>
        <clusters />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    clusters: require('./partials/clusters')
  }
}
</script>


<style scoped>
h1 {
  font-size: 40px;
}

</style>
