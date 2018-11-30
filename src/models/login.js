import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { fakeAccountLogin, qqLogin } from '../services/api';

export default {
  namespace: 'login',

  state: {
    status: undefined,
    userName: '',
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        status: payload.status,
        userName: payload.userName,
      };
    },
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if (response.isSuccess == true) {
        // yield put({
        //   type: 'updateState',
        //   payload: {
        //     status: true,
        //     userName: response.data.user_name,
        //   },
        // });
        // sessionStorage.setItem('userId', response.data.user_id);
        // sessionStorage.setItem('userName', response.data.user_name);
        message.success(response.message);
        yield put(routerRedux.push('/users'));
      } else {
        // yield put({
        //   type: 'changeLoginStatus',
        //   payload: {
        //     status: false,
        //   },
        // });
        message.error(response.message);
      }
    },

    *QQLogin(_, { call }) {
      const response = yield call(qqLogin);
      if (response.code === 0) {
        window.location.href = response.data;
      }
    },

    *logout(_, { put }) {
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('userName');
      yield put(routerRedux.push('/user/login'));
    },
  },
};
