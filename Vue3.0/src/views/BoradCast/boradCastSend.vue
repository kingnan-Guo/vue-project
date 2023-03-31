<template>
  <div>发送数据端</div>
  <div>
    <input type="text" v-model="str">
    <button @click="sendMessage">send</button>
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
      let fn = (n) => {
          console.log('woshifuzujain 777',n);
      };
      // 创建广播事件
      
      var boradCastChannel = new BroadcastChannel('load')
      console.log("boradCastChannel ==", boradCastChannel);

      let sendMessage = (data) =>{
        console.log("sendMessage = ", data);
        console.log("str ==", str);
        boradCastChannel.postMessage({
          value: str.value
        })
      }

      return {//返回数据
        str,
        fn,
        sendMessage
      };
    },
  };
  </script>

  <style></style>

  
