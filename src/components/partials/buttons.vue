<template>
  <div class="row">
    <div class="col-xs-5 col-xs-offset-1 col-md-4 col-md-offset-2">
      <button
        type="submit"
        :class="locked ? 'btn btn-danger disabled' : 'btn btn-danger'"
        v-on:click="onNo"
      >
        <span class="fa fa-times" aria-hidden="true"></span>
      </button>
    </div>
    <div class="col-xs-5 col-md-4">
      <button
        type="submit"
        :class="locked ? 'btn btn-success disabled' : 'btn btn-success'"
        v-on:click="onYes"
      >
        <span class="fa fa-check" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['locked'],
  methods: {
    onNo: function() {
      if(this.locked) {
        return;
      }
      this.$emit('neok');
    },
    onYes: function() {
      if(this.locked) {
        return;
      }
      this.$emit('ok');
    },
  }
}

</script>

<style scoped>
  button {
    margin: auto;
    text-align: center;
    width: 100%;
    height: 50px;
    font-size: 27px;
  }
</style>
