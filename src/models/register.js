import { routerRedux } from 'dva/router';
import { fakeRegister } from '../services/api';
import { message } from 'antd';

export default {
  namespace: 'register',

  state: {
    status: undefined,
    userId: '',
    isExist: false,
    error: '',
  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },

    registerHandle(state, { payload }) {
      return {
        ...state,
        status: payload.status,
        userId: payload.userId,
        error: payload.error,
      };
    },

    checkEmail(state, { payload }) {
      return {
        ...state,
        isExist: payload,
      };
    },
  },

  effects: {
    *submit({ payload }, { call, put }) {
      const data = yield call(fakeRegister, payload);
      if (data.isSuccess == true) {
        message.success(`${data.message}，请登录！`);
      } else {
        message.error(data.message);
      }
    },
  },
};
