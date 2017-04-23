<template>
  <div style="height: 500px; override:hidden">
    <svg width="100%" height="450"></svg>
    <div class="nah">
    <tooltip
      v-if="npo"
      :title="npo.name"
      description=" "
    />
    </div>
  </div>

</template>

<script>

//https://bl.ocks.org/mbostock/1747543

const render = require('./cluster-render').default;
const $ = require('jquery');
const _ = require('lodash');

export default {
  data: function() {
    return {
      npo: undefined
    }
  },
  mounted: function() {
    var width = $(this.$el).find('svg').width();
    var height = $(this.$el).find('svg').height();
    var svg = d3.select(this.$el).select('svg');
    $.getJSON('static/data/clusters.json', (data) => {
      render(
        svg, width, height,
        _.take(data.payload, 300),
        this.onIn.bind(this), this.onOut.bind(this)
      );
    });
  },
  methods: {
    onIn: function(d) {
      this.npo = d;
      console.log(d);
    },
    onOut: function(d) {
      this.npo = undefined;
    }
  },
  components: {
    tooltip: require('./tooltip')
  }
}

</script>

<style scoped>
.nah {
  position: relative;
  top: -300px;
}

</style>
