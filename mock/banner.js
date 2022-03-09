export default [
  /**
   * 获取轮播图
   */
  {
    url: '/api/banner/getAllBanners',
    method: 'get',
    response: ({ query }) => {
      return {
        status: 200,
        message: '请求成功',
        data: {
          list: [
            {
              image:
                'https://s11.mogucdn.com/mlcdn/c45406/201126_0hgl23klege84596ljk0hgcc0g3f2_1060x367.jpg_750x9999.v1c7E.81.webp',
              url: '/promotion/ydftx',
            },
            {
              image:
                'https://s17.mogucdn.com/mlcdn/c45406/201125_07510jcdhelj6630a0cibl1fa5ci5_1060x367.jpg_750x9999.v1c7E.81.webp',
              url: '/promotion/jjyz',
            },
            {
              image:
                'https://s18.mogucdn.com/mlcdn/c45406/201126_0a5lh50816f213d8e1dai7kl5ij4g_1060x367.png_750x9999.v1c7E.81.webp',
              url: '/promotion/qdpsfx',
            },
          ],
        },
      }
    },
  },
]
