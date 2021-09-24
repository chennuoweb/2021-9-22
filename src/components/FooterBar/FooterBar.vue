<template>
  <div class="footer-wrapper">
    <div class="meizu-footer w">
      <!-- 服务项目 -->
      <div class="meizu-row clearfix">
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
      <hr class="footer-hr">
      <!-- 联系信息 -->
      <div class="meizu-co">
        <ul class="meizu-links clearfix">
          <li>
            <a href="javascript:;">了解魅族</a>
          </li>
          <li class="line"></li>
          <li>
            <a href="javascript:;">加入我们</a>
          </li>
          <li class="line"></li>
          <li>
            <a href="javascript:;">联系我们</a>
          </li>
          <li class="line"></li>
          <li>
            <a href="javascript:;">天猫旗舰店</a>
          </li>
          <li class="line"></li>
          <li>
            <a href="javascript:;">问题反馈</a>
          </li>
          <li class="line"></li>
          <li>
            <a href="javascript:;">线上销售授权名单公示</a>
          </li>
          <li class="line"></li>
          <li>
            <a href="javascript:;">出版物经营许可证</a>
          </li>
          <li class="line"></li>
          <li>
            <a href="javascript:;">涉未成年人网络有害信息举报 (12377)</a>
          </li>
          <li class="line"></li>
          <li>
            <a href="javascript:;">网络违法违规人员举报</a>
          </li>
          <li class="line"></li>
          <li class="last-li">
            <a href="javascript:;"  class="change">
              <i></i>简体中文
              <ul class="all-language">
                <li class="">
                  <a href="javascript:;">
                    <i></i>简体中文
                  </a>
                </li>
                <li class="">
                  <a href="javascript:;">
                    <i></i>繁体中文
                  </a>
                </li>
                <li class="">
                  <a href="javascript:;">
                    <i></i>haha
                  </a>
                </li>
                <li class="">
                  <a href="javascript:;">
                    <i></i>haha
                  </a>
                </li>
                <li class="">
                  <a href="javascript:;">
                    <i></i>haha
                  </a>
                </li>
                <li class="">
                  <a href="javascript:;">
                    <i></i>haha
                  </a>
                </li>
              </ul>
            </a>
          </li>
        </ul>
        <ul class="meizu-footer-certificate clearfix">
          <li> ©2020 Meizu Telecom Equipment Co., Ltd. All rights reserved.</li>
          <li><a href="javascript:;">粤ICP备13003602号</a></li>
          <li><a href="javascript:;">合字B2-20170010</a></li>
          <li><a href="javascript:;">营业执照</a></li>
          <li><a href="javascript:;">法律声明</a></li>
          <li><a href="javascript:;"><i class="gongan"></i>粤公网安备 44049102496009 号</a></li>
          <li><a href="javascript:;" class="footer-info-license"><i></i></a></li>
          <li><a href="javascript:;" class="footer-info-wel"><i></i></a></li>
          <li><a href="javascript:;" class="footer-info-trust"><i></i></a></li>
        </ul>
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

    .footer-hr{
      margin: 10px 0 28px;
      border: 0;
      border-top: 1px solid #eee;
      color: #515151;
    }
    // 联系  服务
    .meizu-links{
      .li-style();
      .last-li{
        position: relative;
        .change{
          display: block;
          line-height: 18px;
          >i:extend(.i-style){
            width: 18px;
            height: 18px;
            margin-right: 5px;
          }
          
          &:hover .all-language{
            color: @blue;
            height: 222px;
          }
          // 弹框
          .all-language{
            display: flex;
            position: absolute;
            bottom: 30px;
            width: 90px;
            height: 0;
            overflow: hidden;
            flex-direction: column;
            background-color: #fff;
            box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.15);
            transition: height .3s;
            li{
              a{
                display: block;
                line-height: 37px;
                i:extend(.i-style){
                  width: 23px;
                  height: 23px;
                  margin: 7px 7px 7px 5px;
                }
              }
            }
          }
        }
      }
      .line{
        width: 1px;
        height: 8px;
        margin: 6px 15px;
        background-color: #999;
      }
    }

    // 证书
    .meizu-footer-certificate{
      line-height: 28px;
      padding-top: 8px;
      .li-style();
      li{
        color: #999;
        font-size: 12px;
        a{
          margin-right: 14px;
          .gongan{
            width: 14px;
            height: 17px;
            position: relative;
            top: 4px;
            margin-right: 4px;
            display: inline-block;
            background-image: url(./images/gongan.png);
          }
        }
        .footer-info-license{
          .i-footer-info-style();
          .common-backgrouimage(1);
        }
        .footer-info-wel{
          .i-footer-info-style();
          .common-backgrouimage(2);
        }
        .footer-info-trust{
          .i-footer-info-style();
          .common-backgrouimage(3);
        }
      }
      & li:nth-child(2){
        margin-left: 20px;
      }
    }
  }
  
}

.common-backgrouimage(@imgpath: ''){
  i{
    background-image: url('./images/icon-@{imgpath}-n.png');
  }
  &:hover i{
    background-image: url('./images/icon-@{imgpath}-a.png');
  }
}

// 公共li列表样式
.li-style{
  li{
    float: left;
    a{
      font-size: 12px;
      color: #999;
      &:hover{
        color: @blue;
      }
    }
  }
}

// 公共图片样式
.i-footer-info-style{
  vertical-align: middle;
  i{
    width: 15px;
    height: 17px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: 2px;
  }
}

// 公共语言图标样式
.i-style{
  float: left;
  background-image: url(./images/language-icons.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.icon-language(@indexStart, @index: 1) when (@indexStart <= @index) {
  .all-language li:nth-child(@{indexStart}) i{
    background-position: 0px (-23px * (@indexStart - 1));
  }
  .icon-language(@indexStart + 1, @index);
}
.icon-language(1, 6);

</style>