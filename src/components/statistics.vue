<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-xs-12">
        <h1>Stat</h1>
      </div>
    </div>
    <!-- <ul id="example-1 text-center">
      <li v-for="item in list">
        {{ item.id }} :
        {{ item.against }} -
        {{ item.for }}
      </li>
    </ul> -->
    <hr>
    <div class="text-center jopa">
    <b> Total: </b> {{ total }}
    </div>
    <br><br><br><br>
  </div>
</template>

<script>

const $ = require('jquery');

export default {
  data: function() {
    return {
      list: undefined,
      total: 0
    }
  },
  created: function() {
    $.getJSON('https://vknko-165508.appspot.com/results', (data) => {
      this.list = [];
      var left = 0;
      var right = 0;
      for(var j in data) {
        var e = data[j];
        e.id = j;
        this.list.push(e);
        left += e.against;
        right += e.for;

      }
      this.total = left / (left + right);

      this.total = ((this.total * 100) + '').substr(0, 5) + '%'
      console.log(this.list);
    })
  }
}
</script>


<style scoped>
h1 {
  font-size: 40px;
}
ul {
  margin-left: 100px;
}
.jopa {
  font-size: 40px;
}
</style>
