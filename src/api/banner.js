import request from '@/utils/request'

/**
 * 获取轮播图
 * @returns
 */
export const getBanners = () => {
  return request.get('/api/banner/getAllBanners')
}
