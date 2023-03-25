
import observeFunction from './observeFunction'
// 自定义指令
const directives = {
  'size-ob': observeFunction
}
export default {
  install (Vue) {
    Object.keys(directives).forEach((key) => {
      // console.log("export default  =install=", Vue);
      // console.log("directive=", key);
      Vue.directive(key, directives[key])
    })
  }
}
