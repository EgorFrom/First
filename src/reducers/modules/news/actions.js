import {LOADING_NEWS_FULFILLED} from '.';

export const fetchNewsFulfilled = news => ({
  type: LOADING_NEWS_FULFILLED,
  news,
});
