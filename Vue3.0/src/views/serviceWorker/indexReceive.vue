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
      navigator.serviceWorker.register("./sw.js").then(() => {
          console.log("serviceWorker success");
      })

      navigator.serviceWorker.onmessage = function (params) {
        console.log('onmessage =', params);
        str.value = params.data
      }


      return {//返回数据
          str
      };
    },
  };
  </script>

  <style></style>

  
