export default [
  {
    url: '/api/user/getUserInfo',
    method: 'get',
    response: ({ query }) => {
      return {
        status: 200,
        message: '请求成功',
        'data|3': [
          {
            name: '@cname',
            age: '@integer(20,50)',
          },
        ],
      }
    },
  },
]
