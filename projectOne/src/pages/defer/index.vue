<template>
  <div class="test">
    <h1>defer</h1>

    <div v-for="index of 21" :key="index" v-if="defer(index * 10)">
        {{index}}
    </div>

  </div>
</template>

<script>
import defer from './mixin/defer.js'
export default {
  components: {},
  data () {
    return {
    }
  },
  mixins: [defer(200)],
  methods: {
    addData () {
    },
    obFunction () {
    },
    clickData () {
    }
  },
  watch: {
  },
  mounted () {
    console.log('------------- defer ------------')
  }
}
</script>
