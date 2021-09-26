
import {
  RECEIVE_NEWS,
} from './mutation-types';


import {
  reqNews,
} from '../api/index';

export default {
  // 异步请求新闻列表
  async getNews({commit}) {
    const result = await reqNews();
    if(result.code == 200) {
      const news = result.data;
      commit(RECEIVE_NEWS, { news });
    }
  }
}