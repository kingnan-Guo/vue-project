<template>
    <div class="about">
        <span>customIce test</span>
        <div>form npm  </div>
    </div>
</template>

<script >
import { ref } from "vue";
export default {
    name:"customIce",
    setup(prpos, { next }) {
      console.log("prpos ==", prpos, "next ==", next)
      const str = ref("zhangsna");
      console.log(str);



      return {//返回数据
          str
      };
    },
}
</script>
<style >
.about{
    width: 100px;
}

</style>
  