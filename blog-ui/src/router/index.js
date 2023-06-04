import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    component: (resolve) => require(['../views/home/Home.vue'], resolve)
  },
  {
    path: '/articles/:articleId',
    component: (resolve) => require(['../views/article/Article.vue'], resolve)
  },
  {
    path: '/archives',
    component: (resolve) => require(['../views/archive/Archive.vue'], resolve),
    meta: {
      title: '归档'
    }
  },
  {
    path: '/albums',
    component: (resolve) => require(['../views/album/Album.vue'], resolve),
    meta: {
      title: '相册'
    }
  },
  {
    path: '/albums/:albumId',
    component: (resolve) => require(['../views/album/Photo.vue'], resolve)
  },
  {
    path: '/tags',
    component: (resolve) => require(['../views/tag/Tag.vue'], resolve),
    meta: {
      title: '标签'
    }
  },
  {
    path: '/categories',
    component: (resolve) =>
      require(['../views/category/Category.vue'], resolve),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/categories/:categoryId',
    component: (resolve) =>
      require(['../views/article/ArticleList.vue'], resolve)
  },
  {
    path: '/tags/:tagId',
    component: (resolve) =>
      require(['../views/article/ArticleList.vue'], resolve)
  },
  {
    path: '/links',
    component: (resolve) => require(['../views/link/Link.vue'], resolve),
    meta: {
      title: '友链列表'
    }
  },
  {
    path: '/about',
    component: (resolve) => require(['../views/about/About.vue'], resolve),
    meta: {
      title: '关于开发者'
    }
  },
  {
    path: '/message',
    component: (resolve) => require(['../views/message/Message.vue'], resolve),
    meta: {
      title: '留言板'
    }
  },
  {
    path: '/blog',
    component: (resolve) => require(['@/views/blog/Blog.vue'], resolve),
    meta: {
      title: '我的博客'
    }
  },
  {
    path: '/user',
    component: (resolve) => require(['../views/user/User.vue'], resolve),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/callback/qq',
    component: (resolve) => require(['../components/OauthLogin.vue'], resolve)
  },
  {
    path: '/callback/gitee',
    component: (resolve) => require(['../components/OauthLogin.vue'], resolve)
  },
  {
    path: '/callback/weibo',
    component: (resolve) => require(['../components/OauthLogin.vue'], resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
