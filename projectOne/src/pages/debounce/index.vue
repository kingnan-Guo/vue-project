<template>
  <div class="test">
    <h1>debounce</h1>
    <div>
      <div >nomal</div>
      <input @input="handleChange">
      <div>
        <span>value:</span>
        <span>{{inputValue}}</span>
      </div>
    </div>

    <div>
      <div>others</div>

      <input ref="myRef" v-model="inputOthersValue" @input="othersHandleChange">
      <div>
        <span>others-value:</span>
        <span>{{inputOthersValue}}</span>
      </div>

    </div>

  </div>
</template>

<script>

import {debounce} from './debounce.js'

// others
import { ref } from 'vue'

export default {
  components: {},
  data () {
    return {
      inputValue: '',
      inputOthersValue: ''
    }
  },
  methods: {
    addData () {
    },
    handleChange (value) {
      // console.log('handleChange ==', value)
      // console.log('debounce =', debounce)
      // var _that = this
      // const upDate = (e) => {
      //   console.log('upDate ==', e)
      //   this.inputValue = e.target.value
      // }

      debounce(this.upDate, 1000)(value)
    },
    upDate (e) {
      console.log('upDate ==', e)
      this.inputValue = e.target.value
    },
    othersHandleChange (value) {
      console.log('othersHandleChange ==', value)
      console.log('ref ==', ref)
      console.log('this.$ref.myRef ==', this.$refs.myRef.value)
    }
  },
  watch: {
  },
  mounted () {
    console.log('------------- debounce ------------')
  }
}
</script>
