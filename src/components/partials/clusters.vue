<template>
  <svg width="100%" height="450"></svg>
</template>

<script>

//https://bl.ocks.org/mbostock/1747543

const render = require('./cluster-render').default;
const $ = require('jquery');

export default {
  mounted: function() {
    var width = $(this.$el).width();
    var height = $(this.$el).height();
    var svg = d3.select(this.$el);
    $.getJSON('static/data/clusters.json', (data) => {
      render(svg, width, height, data.payload);
    });

  }
}

</script>

<style>

</style>
