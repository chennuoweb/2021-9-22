import Mock from 'mockjs';
const Random = require('mockjs').Random;
// const stringdata = Mock.mock({
//   'string|1-10': 'haha'
// })
const {news} = Mock.mock({
  "news|10-30": [
    {
      "id":"@increment()",
      "title":"@ctitle",
      "content":"@cparagraph(5,15)",
      "img_url":Random.image('100x100','#ff83fa','#fcfcfc','png','蓝猫'),
      "add_time":"@DATE(yyyy-MM-dd hh:mm:ss)"
    }
  ]
})
Mock.mock('/api/news', 'get', () => {
  return {
    code: 200,
    message: '成功',
    data: news
  }
});
