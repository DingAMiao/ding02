<template>
  <div>
    <header class="aui-navBar aui-navBar-fixed">
      <a href="javascript:;" class="aui-navBar-item">
        <i class="icon"></i>
      </a>
      <div class="aui-center">
        <span class="aui-center-title">拼团</span>
      </div>
      <a href="javascript:;" class="aui-navBar-item">
        <i class="icon icon-sys"></i>
      </a>
    </header>
    <list :list="list" :dataName="'collage'"></list>
  </div>
</template>
<script>
import list from '../components/list';

export default {
   data(){
    return{
      list:[]
    }
  },
  mounted(){
    // axios()
    this.$http({
      url:"/data/list.data"
    }).then(
      res=>this.list=res.data
    )
  },
    components:{list}
}
</script>