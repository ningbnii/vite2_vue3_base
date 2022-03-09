import request from '@/utils/request'

/**
 * 获取推荐类目
 * @returns
 */
export const getRecommendCategories = () => {
  return request.get('/api/category/getRecommendCategories')
}
