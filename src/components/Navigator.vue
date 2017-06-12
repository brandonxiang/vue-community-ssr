<template>
    <mt-tabbar v-model="selected">
    <mt-tab-item id="home">
        <img slot="icon" src="http://via.placeholder.com/100x100">
        首页
    </mt-tab-item>
    <mt-tab-item id="tab2">
        <img slot="icon" src="http://via.placeholder.com/100x100">
        发布
    </mt-tab-item>
    <mt-tab-item id="tab3">
        <img slot="icon" src="http://via.placeholder.com/100x100">
        消息
    </mt-tab-item>
    <mt-tab-item id="tab4">
        <img slot="icon" src="http://via.placeholder.com/100x100">
        我的
    </mt-tab-item>
    </mt-tabbar>
</template>

<script>
export default {
  data(){
      return{
          selected: 'home',
      }
  }
}
</script>
