<template>
  <div class="container">
    <div class="dholder">
      <loading v-if="loading" />
      <div class="row" id="some" v-if="!loading">
        <div class="col-xs-12 cand-line">
          <nko :item="candidate.nko" />
        </div>
        <sep/>
        <div class="col-xs-12 cand-line">
          <vk :item="candidate.vk" />
        </div>
      </div>
    </div>
    <buttons
      :locked="loading"
      v-on:ok="onOk"
      v-on:neok="onNeok"
    />
  </div>
</template>

<script>

const $ = require('jquery');

const HDATA_BASE = 'http://' + location.hostname + ':3006';
const HDATA_RES = HDATA_BASE + '/result';
const HDATA_SOURCE = HDATA_BASE + '/candidate';

export default {
  data() {
    return {
      loading: false,
      candidate: undefined,
      count: 0
    }
  },
  created() {
    this.loadNextCandidate();
  },
  components: {
    buttons: require('./partials/buttons'),
    nko: require('./partials/nko'),
    vk: require('./partials/vk'),
    loading: require('./partials/loading'),
    sep: require('./partials/sep')
  },
  methods: {
    onOk: function() {
      this.sendResult(true);
      this.loadNextCandidate();
    },
    onNeok: function() {
      this.sendResult(false);
      this.loadNextCandidate();
    },
    sendResult: function(result) {
      $.post(HDATA_RES, {
        id: this.candidate.id,
        result: result
      });
    },
    loadNextCandidate() {
      if(this.loading) {
        return;
      }
      this.loading = true;
      this.count++;

      var self = this;
      $.getJSON(HDATA_SOURCE, function(data) {
        self.loading = false;
        self.candidate = data;
      });
    }
  }
}
</script>


<style scoped>
h1 {
  font-size: 15px;
}
.dholder {
  height: 385px;
}
.cand-line {
  height: 150px;
}

</style>
