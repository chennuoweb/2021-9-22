<template>
  <div class="top-bar-wrapper">
    <div class="top-bar w">
      <!-- logo -->
      <div class="header-logo">
        <a href="#"><img src="./images/top-logo.png" alt="meizu" /></a>
      </div>
      <!-- 个人 -->
      <div class="header-service">
        <div class="search">
          <form action="">
            <input type="text" class="search-inp">
            <button class="search-btn">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div class="user-info">
          <a href="#">
            <i class="fas fa-user"></i>
          </a>
        </div>
        <div class="cart-info">
          <a href="#">
            <span>0</span>
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
      <!-- 头部导航 -->
      <div class="header-nav">
        <ul class="nav-list">
          <li class="goods-active"><a href="javascript:;">手机</a></li>
          <li class="goods-active"><a href="javascript:;">Lipro</a></li>
          <li class="goods-active"><a href="javascript:;">声学</a></li>
          <li class="goods-active"><a href="javascript:;">配件</a></li>
          <li class="goods-active"><a href="javascript:;">PANDAER</a></li>
          <li><a href="javascript:;">Flyme</a></li>
          <li><a href="javascript:;">服务</a></li>
          <li><a href="javascript:;">社区</a></li>
          <li><a href="javascript:;">企业服务</a></li>
          <li><a href="javascript:;">APP下载</a></li>
          <!-- 商品类信息 -->
          <div class="goods-category-info">
            <ul class="goods-list w">
              <li class="good-info">
                <a href="javascript:;">
                  <img src="./images/phoneimg/mphone_1.png" alt="">
                  <span>魅族 18X</span>
                  <span>¥ 2599</span>
                </a>
              </li>
              <li class="good-info">
                <a href="javascript:;">
                  <img src="./images/phoneimg/mphone_2.png" alt="">
                  <span>魅族 18s</span>
                  <span>¥ 3699</span>
                </a>
              </li>
              <li class="good-info">
                <a href="javascript:;">
                  <img src="./images/phoneimg/mphone_3.png" alt="">
                  <span>魅族 18s Pro</span>
                  <span>¥ 4599</span>      
                </a>
              </li>
              <li class="good-info">
                <a href="javascript:;">
                  <img src="./images/phoneimg/mphone_4.png" alt="">
                  <span>魅族 18s Pro</span>
                  <span>¥ 4599</span>      
                </a>
              </li>
              <li class="good-info">
                <a href="javascript:;">
                  <img src="./images/phoneimg/mphone_5.png" alt="">
                  <span>魅族 18s Pro</span>
                  <span>¥ 4599</span>      
                </a>
              </li>
              <li class="good-info">
                <a href="javascript:;">
                  <img src="./images/phoneimg/mphone_6.png" alt="">
                  <span>魅族 18s Pro</span>
                  <span>¥ 4599</span>      
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headertopbar",
};
</script>

<style lang='less' rel="stylesheet/less" scoped>
@import '../../common/less/mixins.less';
.top-bar-wrapper{
  width: 100%;
  background-color: transparent;
}
.top-bar{
  height: 84px;
  .header-logo{
    float: left;
    padding: 28px 0;
    img{
        width: 125px;
    }
  }
  .header-nav, .header-service{
    float: right;
  }
  .header-nav{
    .nav-list > li{
      float: left;
      a{
        display: block;
        padding: 31px 10px 0;
        margin-bottom: 20px;
        color: #ffffff;
        &:hover{
          color: @blue;
        }
      }
    }
    .nav-list{
      .goods-active{
        &:hover ~ .goods-category-info{
          height: 184px;
        }
      }
      .goods-category-info{
        // 自身宽度的大小为最近position: relative的大小比例
        position: absolute;
        width: 100%;
        height: 0;
        overflow: hidden;
        transition: height 0.3s;
        top: 84px;
        left: 0;
        right: 0;
        box-shadow: 0 10px 5px -5px rgba(0, 0, 0, 0.15);
        background-color: #fff;
        z-index: 9999;
        .goods-list{
          display: flex;
          justify-content: space-evenly;
          .good-info a{
            width: 150px;
            text-align: center;
            color: #ffffff;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
              width: 130px;
            }
            span{
              margin-bottom: 3px;
            }
          }
        } 
        &:hover{
          height: 184px;
        }  
      }
    }
  }
  .header-service{
      width: 274px;
      height: 84px;
    div{
      float: left;
    }
    .search{
      width: 170px;
      height: 30px;
      margin: 24px 0 0 18px;
      border: 1px solid rgba(0, 0, 0, .15);
      border-radius: 30px;
      .search-inp{
        float: left;
        width: 125px;
        height: 28px;
        margin-left: 10px;
        border: none;
        outline: none;
        color: #ffffff;
        background-color: transparent;
      }
      .search-btn{
        float: right;
        width: 30px;
        height: 32px;
        border: none;
        background-color:transparent;
        &:hover{
          cursor: pointer;
        }
      }
    }
    .user-info, .cart-info{
      a{
        display: block;
        width: 30px;
        line-height: 30px;
        padding-top: 24px;
        margin-right: 5px;
        text-align: center;
        font-size: 22px;
        color: rgb(102, 102, 102);
        &:hover{
        color: @blue;
        }
      }
    }
    .cart-info{
        position: relative;
        span{
          display: block;
          position: absolute;
          width: 16px;
          line-height: 16px;
          border-radius: 30px;
          top: 20px;
          right: 0;
          font-size: 12px;
          color: #fff;
          background-color: rgb(241, 0, 0);
        }
      }
  }
}
</style>