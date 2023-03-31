<template>
    <div>接收数据端</div>
    <div>
      {{ str }}
      {{ data }}
    </div>
  </template>
  
  <script>
    import { ref } from "vue";
    export default {
      components: {
      },
      setup(prpos, { next }) {
        console.log("prpos ==", prpos, "next ==", next)
        const str = ref("zhangsna");
        console.log(str);

        // 接收广播事件 发来的数据
        var boradCastChannel = new BroadcastChannel('load')
        console.log("boradCastChannel ==", boradCastChannel);
        var data = '22'
        boradCastChannel.onmessage =  (params) => {
            console.log("boradCastChannel.onmessage ==", params);
            str.value = params.data.value
        }
  
        return {//返回数据
            data,
            str
        };
      },
    };
    </script>
  
    <style></style>
  
    
  