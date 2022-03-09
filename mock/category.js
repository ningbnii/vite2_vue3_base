export default [
  /**
   * 获取推荐类目
   */
  {
    url: '/api/category/getRecommendCategories',
    method: 'get',
    response: ({ query }) => {
      return {
        status: 200,
        message: '请求成功',
        data: {
          'data|20': [
            {
              'image|+1': [
                'https://s10.mogucdn.com/mlcdn/c45406/201117_05a1b05j9aaf8d0a7idjgc7eih4lj_135x135.png_640x640.v1cAC.40.webp',
                'https://s10.mogucdn.com/mlcdn/c45406/200327_53b3db6jf13f45j990bfb9759e4ca_135x135.jpg_640x640.v1cAC.40.webp',
                'https://s10.mogucdn.com/mlcdn/c45406/201117_5gd071j7ddhcj5l26032l3be5f66k_135x135.png_640x640.v1cAC.40.webp',
                'https://s10.mogucdn.com/mlcdn/c45406/201112_4kgic58fk7edcediic8b9jcgh641e_135x135.png_640x640.v1cAC.40.webp',
                'https://s10.mogucdn.com/mlcdn/c45406/201102_3313di64i2bag69fek5ddbi76ka17_135x135.jpg_640x640.v1cAC.40.webp',
                'https://s10.mogucdn.com/mlcdn/c45406/200327_883914gkdb4kdc1hg8a86acea5k8d_135x135.jpg_640x640.v1cAC.40.webp',
              ],
              'title|+1': ['上衣', '裤子', '裙子', '女鞋', '男友', '包包'],
              'id|+1': [0, 1, 2, 3, 4, 5],
            },
          ],
        },
      }
    },
  },
]
