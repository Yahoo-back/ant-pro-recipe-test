import { stringify } from 'qs';
import request from '../utils/request';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function queryNotices() {
  return request('/api/notices');
}

// 注册
export async function fakeRegister(params) {
  return request('/user/register', {
    method: 'POST',
    body: params,
  });
}

// 检查邮箱是否被注册
export async function checkEmail(params) {
  return request('apiv1/check', {
    method: 'POST',
    body: params,
  });
}

// 登录
export async function fakeAccountLogin(params) {
  return request('/user/login', {
    method: 'POST',
    body: params,
  });
}

// qq登录
export async function qqLogin(params) {
  return request(`/apiv1/getqqurl?${stringify(params)}`);
}
