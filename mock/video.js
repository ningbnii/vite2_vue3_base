export default [
  /**
   * 获取轮播图
   */
  {
    url: '/api/video/getBrandVideos',
    method: 'get',
    response: ({ query }) => {
      return {
        status: 200,
        message: '请求成功',
        data: {
          'list|10': [
            {
              'image|+1': [
                'https://s5.mogucdn.com/mlcdn/c45406/200904_4k17kli0kd31lj47h3b15219flh05_590x1280.png_999x999.v1c0.100.webp',
                'https://s5.mogucdn.com/mlcdn/c45406/200905_0631ef6f09hdi0igkkdg1hj561e03_607x1080.jpg_400x9999.v1c7E.70.webp',
              ],
              'des|+1': [
                '甜心团队从三个人发展到现在，一路走来相互扶持相互陪伴才有了今天的成就，想到你们这么多年的感情听到你们一起唱歌忍不住泪目，希望你们友谊长存，甜心团队加油🙃🙃',
                '懒人上班上学快速出门发型✅ 啦啦啦～ 你们千呼万唤的学生党上班族手残党极速出门发型来啦！ 真的很快哈哈哈，都是一分钟内搞定哦！ 而且不扯头皮不容易散，可以维持一整天～ ✅清爽高马尾 ✅可爱丸子头 ✅俏皮半高马尾 ✅萌系双马尾 每天发型都能不重样～ 大家一起get起来吧 @蘑菇穿搭酱',
              ],
              'avatarImage|+1': [
                'https://s11.mogucdn.com/mlcdn/c45406/200723_5hf5lj0535gjjdkdk4d2kb58cbk2j_400x400.jpg_100x9999.v1c7E.70.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/190914_57ed66l7dcb4cda4b827069bb5fe1_400x400.jpg_100x9999.v1c7E.70.webp',
              ],
              'avatarDes|+1': ['吃肉肉不长肉肉减肉肉', '米儿姐姐Mirror'],
              'id|+1': [0, 1],
            },
          ],
        },
      }
    },
  },
]
