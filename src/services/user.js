import { stringify } from 'qs';
import request from '../utils/request';

export async function getRecentSubmit(params) {
  return request(`/user/recentsubmit?${stringify(params)}`);
}
