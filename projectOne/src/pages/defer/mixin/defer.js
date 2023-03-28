/**
 * 使用延迟 装载  多div 渲染（defer）
 * @param {*} maxFrameCount 最大渲染数
 * @return
 * JS 传输完成后  浏览器开始执行JS 构造页面
 * 但有可能一开始渲染组件过多，不仅JS执行的时间长，而且执行完后 浏览器要渲染的元素的过程中导致白屏
 * 一个可行的方法就是延迟装载组件，让组件按照指定的先后顺序依次一个一个渲染出来
 */
export default function (maxFrameCount) {
  return {
    data () {
      return {
        freameCount: 0
      }
    },
    mounted () {
      const refreashFrameCount = () => {
        requestAnimationFrame(() => {
          this.freameCount++
          if (this.freameCount < maxFrameCount) {
            refreashFrameCount()
          }
        })
      }
      refreashFrameCount()
    },
    methods: {
      defer (showInFrameCount) {
        return this.freameCount >= showInFrameCount
      }
    }
  }
}
