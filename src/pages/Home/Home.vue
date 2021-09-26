<template>
  <div class="all-container clearfix">
    <!-- 轮播图 -->
    <div class="mz-index-banner">
      <!-- swiper的容器div -->
      <div class="swiper-container">
        <!-- swiper的包裹层div -->
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper" v-if="bannerImg.length">
          <swiper-slide class="swiper-slide"  v-for="(item, index) in bannerImg" :key="index">
            <!-- <img :src="require('./images/banner/banner_' + item)"> -->
            <!-- 让图片成为banner-img盒子的背景图 -->
            <div class="banner-img"></div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- 主页内容 -->
    <div class="index-container">
      <!--  -->
      <div class="index-adv-center min-w">
        <ul class="section-list clearfix">
          <li><a href="javascript:;">
            <img src="./images/section/section-1.jpg">
            <em>2021 魅友节</em>
            <span>无魅友 不魅族</span>
          </a></li>
          <li><a href="javascript:;">
            <img src="./images/section/section-2.png">
            <em>魅族 18</em>
            <span>立省1000 + 12 期免息 + 赠手机壳</span>
          </a></li>
          <li><a href="javascript:;">
            <img src="./images/section/section-3.png">
            <em>渴物众筹 </em>
            <span>现已开启</span>
          </a></li>
          <li><a href="javascript:;">
            <img src="./images/section/section-4.jpg">
            <em>mCycle</em>
            <span>以旧换新</span>
          </a></li>
        </ul>
      </div>
      <!-- 魅族手机 -->
      <div class="index-phone-center">
        <div class="section-box">
          <!-- 标题 -->
          <div class="section-titile">
            <span>魅族手机</span>
          </div>
          <!--  -->
          <div class="section-box-adv">
            <a href="javascript:;"><img src=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper插件
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'Home',
  data() {
    return {
      bannerImg: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
      swiperOption: {
        notNextTick: true,
        // loop: true,
        // effect : 'cube',
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    this.$nextTick = () => {
      
    } 
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../common/less/mixins.less';
.all-container{
  // 轮播图
  .mz-index-banner{
    height: 670px;
    .swiper-container{
      height: 670px;
      .swiper-wrapper{
        .min-w();
        height: 670px;
        .swiper-slide{
          height: 670px; 
          overflow: hidden;
          // display: flex;
          // justify-content: center;
          // align-items: flex-start;
          // flex-wrap: wrap;
          width: 100%;
          min-width: 1240px;
          .banner-img{
            // .min-w();
            height: 670px;
          }
        }
      }
    }
  }
  // 
  .index-container{
    .index-adv-center{
      height: 278px;
      margin-bottom: 50px;
      background-color: #ffffff;
      .section-list{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 45px;        
        li{
          width: 310px;
          height: 187px;
          a{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            img{
              width: 130px;
              height: 130px;
              margin-bottom: 10px;
            }
            em{
              color: #333;
              font-size: 20px;
              margin-bottom: 10px;
            }
            span{
              font-size: 14px;
              color: #999;
            }
          }
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