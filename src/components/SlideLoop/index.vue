<template>
  <div class="swiper-container" ref="bannerSwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(banner, index) in bannerList"
        :key="banner.id"
      >
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper"; //js
export default {
  props: ["bannerList"],
  watch: {
    //观测watch的变化，一旦从空数组变为有数据，就进行实例化swiper，但是数据还要v-for
    bannerList: {
      immediate: true,
      handler(newVal, oldVal) {
        //同步代码
        //nextTick是页面最近的一次更新完成之后才会更新
        //updated是只要数据更新，就会执行，不关心是不是最近一次
        this.$nextTick(() => {
          new Swiper(this.$refs.bannerSwiper, {
            //direction: 'vertical', // 垂直切换选项 去掉就代表水平
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>