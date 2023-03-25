<template>
  <div class="test">
    <h1>test</h1>
    <div :style="{width: width}" v-size-ob="obFunction">obFunction</div>
    <button @click="clickData">click me</button>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      preModel: null,
      width: '80px'
    }
  },
  methods: {
    addData () {
    },
    obFunction () {
      console.log('obFunction')
    },
    clickData () {
      this.width = '100px'
    }
  },
  watch: {
  },
  mounted () {
    console.log('------------- test ------------')
  }
}
</script>
