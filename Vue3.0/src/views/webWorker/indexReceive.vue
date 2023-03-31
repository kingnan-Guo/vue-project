<template>
  <div>webWorker接收数据端</div>
  <div>
    {{ str }}
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

      var sharedWorker = new SharedWorker("./sharedWorker.js")
      sharedWorker.port.start()
      sharedWorker.port.addEventListener('message', (event) => {
        console.log("sharedWorker.port.addEventListener ==", event);
      }, false)
      setInterval(() => {
        sharedWorker.port.postMessage("get")
      }, 1000)

      return {//返回数据
          str
      };
    },
  };
  </script>

  <style></style>

  
