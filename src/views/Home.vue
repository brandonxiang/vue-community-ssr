<template>
<div>

<mt-navbar v-model="tab">
  <mt-tab-item id="all">全部</mt-tab-item>
  <mt-tab-item id="good">精华</mt-tab-item>
  <mt-tab-item id="weex">weex</mt-tab-item>
  <mt-tab-item id="share">分享</mt-tab-item>
  <mt-tab-item id="ask">问答</mt-tab-item>
  <mt-tab-item id="job">招聘</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="tab">
  <mt-tab-container-item id="all">
      <cell :content="t" v-for="t in topic" :key="t.id"></cell>
    <!--<cell :content="t" v-for="t in topic" :key="t.id"></cell>-->
    <button @click="temp">s</button>
  </mt-tab-container-item>
  <mt-tab-container-item id="good">
    <!--<mt-cell v-for="n in 4" :title="'content ' + n" />-->
  </mt-tab-container-item>
  <mt-tab-container-item id="weex">
    <!--<mt-cell v-for="n in 4" :title="'content ' + n" />-->
  </mt-tab-container-item>
  <mt-tab-container-item id="share">
    <!--<mt-cell v-for="n in 5" :title="'content ' + n" />-->
  </mt-tab-container-item>
  <mt-tab-container-item id="ask">
    <!--<mt-cell v-for="n in 6" :title="'content ' + n" />-->
  </mt-tab-container-item>
    <mt-tab-container-item id="job">
    <!--<mt-cell v-for="n in 6" :title="'content ' + n" />-->
  </mt-tab-container-item>
</mt-tab-container>

<navigator></navigator>
</div>
</template>

<script>
import Navigator from '../components/Navigator'
import Cell from '../components/Cell'
import {mapGetters, mapActions} from 'vuex'

export default {

    data(){
        return {
            allLoaded: false,
        }
    },

    components:{
        Navigator,
        Cell,
    },

    computed:{
        ...mapGetters(['topic', 'tab']),
    },

    methods:{
        ...mapActions(['getTopic']),
        loadTop() {
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            this.allLoaded = true;// if all data are loaded
            this.$refs.loadmore.onBottomLoaded();
        },
        temp(){
                    console.log(this.topic)
        }
    },

    created(){
        this.getTopic(1)
    },

    mounted(){
        console.log(this.topic)
    }
}

</script>

<style lang="stylus">

</style>