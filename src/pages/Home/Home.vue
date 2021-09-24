<template>
  <div class="all-container clearfix">
    <div class="mz-index-banner">
      <!-- swiper的容器div -->
      <div class="swiper-container">
        <!-- swiper的包裹层div -->
        <div ref="mySwiper" class="swiper-wrapper">
          <div class="swiper-slide"  v-for="(item, index) in bannerImg" :key="index">
            <!-- <img :src="require('./images/banner/banner_' + item)"> -->
            <!-- 让图片成为banner-img盒子的背景图 -->
            <div class="banner-img"></div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper插件
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'Home',
  data() {
    return {
      bannerImg: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', ],
      // swiperOption: {
      //   notNextTick: false,
      //   loop: true,
      //   effect : 'cube',
      //   autoplay: {
      //     delay: 1000,
      //     stopOnLastSlide: false,
      //     disableOnInteraction: false
      //   },
      //   // 显示分页
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true //允许分页点击跳转
      //   },
      // },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    this.$nextTick = () => {
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        //如果需要自动切换海报
        autoplay: {
          delay: 1000,//时间 毫秒
          disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
        },
      });
    } 
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
@import '../../common/less/mixins.less';
.mz-index-banner{
  height: 100%;
  .swiper-container{
    height: 670px;
    .swiper-wrapper{
      height: 670px;
      .swiper-slide{
        height: 670px; 
        overflow: hidden;
        // display: flex;
        // justify-content: center;
        // align-items: flex-start;
        // flex-wrap: wrap;
        .banner-img{
          .min-w();
          height: 670px;
        }
      }
    }
  }
}
.div-img(@indexStart, @index: 1) when (@indexStart <= @index) {
  .swiper-slide:nth-child(@{indexStart}) .banner-img{
    background: url('./images/banner/banner_@{indexStart}.jpg') no-repeat center;
  }
  .div-img(@indexStart + 1, @index);
}
.div-img(1, 6);
</style>