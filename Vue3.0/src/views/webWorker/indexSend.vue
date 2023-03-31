<!-- 
webworker 可以让web应用程序具备后台处理的能力。他具有多线程处理的功能，因此可以充分用用多核CPU的优势
耗时比较长的任务分配

1、通过加载一个js文件来进行大量复杂计算，而不挂起主进程，通过postMessage 和onMessage进行通信
2、可以在 Worker中 童工importScripts(url)方法来加载js脚本文件
3、可以使用setTimeOut。。。。
4、可以使用XMLHttpRequest进行异步请求 但是没有ajax 效率高
5、可以访问nacigator的部分属性
6、不能跨域家在js
7、Worker内不能访问Dom
8、使用 webWorker 加载数据没有JSONP 和 ajax 加载效率高

importScripts('workers.js','worker2.js')
 -->
<template>
    <div>创建 web worker</div>
    <div>
      <input type="text" v-model="str">
    </div>
    <div>
      <button @click="starWorker">starWorker</button>
      <button @click="endWorker">endWorker</button>
    </div>

    <div>-----------------</div>
    <div>发送数据端</div>
    <div>
      <input type="text" v-model="sendMessage">
    </div>
    <div>
      <button @click="sendMessageFunction">sendMessageFunction</button>
    </div>
  </template>
  
  <script>
    import { ref } from "vue";
    export default {
      components: {
      },
      setup(prpos, { next }) {
        console.log("prpos ==", prpos, "next ==", next)
        const str = ref("00");
        console.log(str);
        // worker.onmessage = (event) => {
        //   console.log("worker.onmessage event =", event);
        // }
        let worker = new Worker("./woker.js")
        let starWorker = () =>{
          // 创建一个 Worker
          console.log("str ==", str);
          worker.onmessage = (event) => {
            console.log("worker.onmessage event =", event);
            str.value = event.data
          }
        }
        let endWorker = () =>{
            // console.log("str ==", str);
            worker.terminate()
            worker = null
        };

        const sendMessage = ref("send");

        var sharedWorker = new SharedWorker("./sharedWorker.js")
        let sendMessageFunction = () =>{
            console.log("sendMessageFunction ==", sharedWorker);
            sharedWorker.port.postMessage(sendMessage.value)
        };

        return {//返回数据
          str,
          starWorker,
          endWorker,
          sendMessage,
          sendMessageFunction
        };
      },
    };
    </script>
  
    <style></style>
  
    
  