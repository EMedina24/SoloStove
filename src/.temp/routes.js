const c1 = () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/Users/edgardomedina/Desktop/solostove-gridsome/src/templates/product.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/edgardomedina/Desktop/solostove-gridsome/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/edgardomedina/Desktop/solostove-gridsome/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--page-vue" */ "/Users/edgardomedina/Desktop/solostove-gridsome/src/templates/page.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/edgardomedina/Desktop/solostove-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/products/Yukon/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    path: "/Testing/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
