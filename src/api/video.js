import request from '@/utils/request'

/**
 * 获取所有品类视频列表
 * @returns
 */
export const getBrandVideos = () => {
  return request.get('/api/video/getBrandVideos')
}
