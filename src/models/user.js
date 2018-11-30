import { message } from 'antd';
import { routerRedux } from 'dva/router';
import { getRecentSubmit } from '../services/user';

export default {
  namespace: 'user',

  state: {
    currentUser: {},
    userInfo: {},
    count: {},
    submitList: [],
    rankList: [],
    collectionList: [],
    total: 0,
    currentPage: 1,
    collection: {},
    loading: false,
  },

  effects: {
    *getRecentSubmitList({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(getRecentSubmit, payload);
      if (response.code === 0) {
        yield put({
          type: 'saveSubmitList',
          payload: response.data,
        });
      }
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveSubmitList(state, action) {
      return {
        ...state,
        submitList: action.payload,
      };
    },

    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
};
