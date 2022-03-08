import request from '@/utils/request'

/**
 * 获取用户信息
 * @param {*} params
 * @returns
 */
export const getUserInfo = (params) => {
  return request.get('/api/user/getUserInfo', params)
}
