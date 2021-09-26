
import Vue from 'vue';

import {
  RECEIVE_NEWS,
} from './mutation-types';

export default {
  [RECEIVE_NEWS] (state, {news}) {
    state.news = news;
  }
}
