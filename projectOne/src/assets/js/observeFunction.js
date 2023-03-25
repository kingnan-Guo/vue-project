/**
 * 监听 div 的变化
 */
const map = new WeakMap()
const ob = new ResizeObserver((entries) => {
  console.log('entries ==', entries)
  for (const entry of entries) {
    console.log('map ==', map)
    console.log('entry.target =', entry.target)
    const handler = map.get(entry.target)
    console.log('handler ==', handler)
    if (handler) {
      handler()
    }
  }
})

export default{
  inserted: function (el, binding) {
    console.log('el', el, 'binding=', binding)
    ob.observe(el)
    map.set(el, binding.value)
  },

  bind: function (el, binding) {
    console.log('el', el, 'binding=', binding)
    ob.observe(el)
    map.set(el, binding.value)
  },
  unbind: function (el, binding) {
    ob.unobserve(el)
  }
  // Vue 3.0
  // mounted (el, binding) {
  //   // 监视尺寸变化
  //   console.log('el', el, 'binding=', binding)
  //   ob.observe(el)
  //   map.set(el, binding.value)
  // },
  // unmounted () {
  //   console.log('unmounted')
  //   ob.unobserve(el)
  // }
}
