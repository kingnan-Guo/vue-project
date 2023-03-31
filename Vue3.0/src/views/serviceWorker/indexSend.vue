<template>
    <div>发送数据端</div>
    <div>
      <input type="text" v-model="str">
      <button @click="sendMessage">send</button>
    </div>
  </template>
  
  <script>
    import { ref } from "vue";
    import sw from "./sw.js";
    export default {
      components: {
      },
      setup(prpos, { next }) {
        console.log("prpos ==", prpos, "next ==", next)
        const str = ref("send message");
        console.log(str);
        console.log(sw);
        // 创建广播事件
        // 会返回一个 promise src/views/serviceWorker/sw.js
        navigator.serviceWorker.register("./sw.js").then(() => {
            console.log("serviceWorker success");
        })
        let sendMessage = () =>{
            console.log("str ==", str);
            navigator.serviceWorker.controller.postMessage({
                value: str.value
            })
        }
        return {//返回数据
          str,
          sendMessage
        };
      },
    };
    </script>
  
    <style></style>
  
    
  