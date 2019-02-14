<template>
  <div>
    <header class="aui-navBar aui-navBar-fixed">
      <a href="javascript:;" class="aui-navBar-item">
        <i class="icon"></i>
      </a>
      <div class="aui-center">
        <span class="aui-center-title">超值拼团</span>
      </div>
      <a href="javascript:;" class="aui-navBar-item">
        <i class="icon icon-sys"></i>
      </a>
    </header>
    <swipe class="my-swipe">
      <swipe-item class="slide1">
        <div class="slider-item">
          <a href="javascript:;">
            <img src="../assets/img/banner/banner-001.jpg">
          </a>
        </div>
      </swipe-item>
      <swipe-item class="slide2">
        <div class="slider-item">
          <a href="javascript:;">
            <img src="../assets/img/banner/banner-002.jpg">
          </a>
        </div>
      </swipe-item>
      <swipe-item class="slide3">
        <div class="slider-item">
          <a href="javascript:;">
            <img src="../assets/img/banner/banner-003.jpg">
          </a>
        </div>
      </swipe-item>
      <swipe-item class="slide4">
        <div class="slider-item">
          <a href="javascript:;">
            <img src="../assets/img/banner/banner-004.jpg">
          </a>
        </div>
      </swipe-item>
    </swipe>
    <!-- <div class="m-slider" data-ydui-slider>
      <div class="slider-wrapper">
        <div class="slider-item">
          <a href="javascript:;">
            <img src="../assets/img/banner/banner-001.jpg">
          </a>
        </div>
        <div class="slider-item">
          <a href="javascript:;">
            <img src="../assets/img/banner/banner-002.jpg">
          </a>
        </div>
        <div class="slider-item">
          <a href="javascript:;">
            <img src="../assets/img/banner/banner-003.jpg">
          </a>
        </div>
        <div class="slider-item">
          <a href="javascript:;">
            <img src="../assets/img/banner/banner-004.jpg">
          </a>
        </div>
        <div class="slider-item">
          <a href="javascript:;">
            <img src="../assets/img/banner/banner-005.jpg">
          </a>
        </div>
      </div>
      <div class="slider-pagination"></div>
    </div>-->
    <list :list="list" :dataName="'home'"></list>
  </div>
</template>

<style>
.my-swipe {
  height:160px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>

<script>
import list from "../components/list";

import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";

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
  components: {
    swipe: Swipe,
    "swipe-item": SwipeItem,
    list
  }
};
</script>