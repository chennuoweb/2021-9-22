<template>
  <div class="footer-wrapper">
    <div class="meizu-footer w">
      <div class="meizu-row">
        <ul class="meizu-row-list">
          <li>
            <a href="#">
              <img src="./images/footer-icon1.png" alt="满80免运费">
              <span>满80免运费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/footer-icon2.png" alt="100+ 城市次日送达">
              <span>100+ 城市次日送达</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/footer-icon3.png" alt="7天无理由退货">
              <span>7天无理由退货</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/footer-icon4.png" alt="15天换货保障">
              <span>15天换货保障</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/footer-icon5.png" alt="1年免费保修">
              <span>1年免费保修</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/footer-icon6.png" alt="上门快修">
              <span>上门快修</span>
            </a>
          </li>
        </ul>
        <div class="phone-info">
          <span>周一至周日 8:00-20:00</span>
          <span class="tel">400-788-3333</span>
          <a href="javascript:;">在线客服</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footerbar'
}
</script>

<style lang='less'>
@import '../../common/less/mixins.less';
.footer-wrapper{
  width: 100%;
  height: 301px;
  background-color: #fff;
  .meizu-footer{
    padding-top: 50px;
    .meizu-row-list{
      float: left;
      display: flex;
      li{    
        a{
          display: block;
          width: 150px;
          height: 69px;
          text-align: center;
          img{
            width: 50px;
            margin: 0 50px;
          }
          span{
            color: #999;
            font-size: 12px;
          }
        }
      }
    }

    .phone-info{
      float: right;
      width: 155.7px;
      height: 103px;
      text-align: right;
      & span, & a{
        display: inline-block;
        white-space: nowrap;
      }
      &>span:first-child {
        font-size: 12px;
        color: #999;
      }
      .tel {
        color: @blue;
        font-size: 23px;
        font-weight: 400;
      }
      a{
        line-height: 30px;
        padding: 0 16px;
        font-size: 14px;
        color: #fff;
        background-color: @blue;
        border-radius: 30px;
      }
    }
  }
  
}

</style>