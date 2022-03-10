<template>
  <c-layout>
    <c-header>
      <c-launch></c-launch>
      <c-box-skin type="bottom">
        <c-columns>
          <router-link to="/mall/category">
            <c-svg-button
              size="30"
              :colors="['#c0c0c0']"
              ml30
              mr20
            ></c-svg-button>
          </router-link>

          <c-search
            class="search"
            text="睡衣"
            mt15
            mb15
            mr20
            radius4
          ></c-search>

          <c-svg-more
            size="24"
            :colors="['#c0c0c0', '#fff', '#c0c0c0']"
          ></c-svg-more>
        </c-columns>
      </c-box-skin>
    </c-header>

    <c-content>
      <!-- 轮播图 -->
      <c-swipe class="swipe">
        <c-swipe-item v-for="(item, index) in swipeList" :key="index">
          <router-link :to="item['url']">
            <img class="swipe__img" :src="item['image']" alt="" />
          </router-link>
        </c-swipe-item>
      </c-swipe>

      <!-- 导航栏 -->
      <c-box-skin>
        <van-row class="nav">
          <van-col
            v-for="(item, index) in categoryList"
            :key="index"
            span="4-8"
          >
            <c-avatar
              class="nav__item"
              :url="item['image']"
              direction="vertical"
              :text="item['title']"
              pv10
            >
            </c-avatar>
          </van-col>
        </van-row>
      </c-box-skin>

      <!-- 商品列表 -->
      <van-row class="good" gutter="6" pa12>
        <van-col span="12" v-for="(item, index) in brandList" :key="index">
          <c-box-skin class="good__item" mb12 radius4>
            <img :src="item['image']" alt="" class="good__img" />
            <div class="good__box" pv24 ph12>
              <p class="good__des" mb10>{{ item['des'] }}</p>
              <c-avatar
                class="good__avatar"
                :url="item['avatarImage']"
                :text="item['avatarDes']"
              >
              </c-avatar>
            </div>
          </c-box-skin>
        </van-col>
      </van-row>
    </c-content>

    <c-footer>
      <c-foot-nav class="footer" :list="list"> </c-foot-nav>
    </c-footer>
  </c-layout>
</template>

<script>
import { Swipe, SwipeItem } from '../components/swipe'
export default {
  components: {
    CSwipe: Swipe,
    CSwipeItem: SwipeItem,
  },
}
</script>
<script setup>
import { onMounted, ref } from 'vue'
import { getBanners } from '../api/banner'
import { getRecommendCategories } from '../api/category'
import { getBrandVideos } from '../api/video'

let swipeList = ref([])
let categoryList = ref([])
let brandList = ref([])

const list = [
  {
    path: '/',
    text: '首页',
    active: true,
  },
  {
    path: '/mall/store',
    text: '商城',
  },
  {
    path: '/live/home',
    text: '直播',
  },
  {
    path: '/me/me',
    text: '我',
  },
]

onMounted(() => {
  getBanners().then((res) => {
    swipeList.value = res.list
  })
  getRecommendCategories().then((res) => {
    categoryList.value = res.data
  })

  getBrandVideos().then((res) => {
    brandList.value = res.list
  })
})
</script>

<style scoped lang="scss">
@include b(search) {
  @include dimensions(530px, 60px);
  @include t-shadow;
  &:deep(svg) {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@include b(swipe) {
  @include e(img) {
    @include dimensions(100%, auto);
  }
}

@include b(nav) {
  &:deep(.van-col--4-8) {
    width: 20%;
  }
  @include e(item) {
    &:deep(img) {
      padding-bottom: 10px;
      @include dimensions(100px);
    }
  }
}

@include b(good) {
  @include e(item) {
    overflow: hidden;
  }

  @include e(des) {
    @include ellipsis(2);
  }

  @include e(avatar) {
    max-width: 348px;
    &:deep(img) {
      @include dimensions(50px);
      padding-right: 10px;
    }
    &:deep(span) {
      font-weight: 700;
    }
  }
}

@include b(footer) {
  height: 100px;
  font-size: 32px;
}
</style>
