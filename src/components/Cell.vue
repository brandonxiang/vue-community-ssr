<template>
    <div class="cell">
        <div class="vertical-center">
            <img :src="content.author.avatar_url">
        </div>
        <router-link class="topic" :to="{path:'/content',query:{id:content.id}}">
            <div class="topic-title">
                <span v-if="content.top" class="top-topic">置顶</span>
                <span v-else-if="content.good" class="good-topic">精华</span>
                <span>{{content.title}}</span>
            </div>
            <div class="topic-content">
                <span>
                    {{content.author.loginname}} {{content.visit_count}}／{{content.reply_count}}
                </span>
                <!--<span>{{content.last_reply_at}}</span>-->
            </div>
        </router-link>
    </div>
</template>

<script>


export default {

    props: {
        content: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped lang="stylus">
.cell
  border-bottom 1px solid #f3f3f3
  display flex
  img
    padding 10px
    border-radius 50%
    height 40px
    width 40px
    
  .topic
    flex 1
    padding 10px
    text-align left
    .topic-title
      margin-right 5px
      padding 5px 0
      line-height 25px

a
  color #333333

.vertical-center
  display flex
  align-items center
</style>


<style >
.good-topic {
    background-color: darkorange;
    color: white;
    padding: .2rem;
    border-radius: .2rem;
    font-size: 14px;
}

.topic-title {
    font-weight: bold;
}
</style>