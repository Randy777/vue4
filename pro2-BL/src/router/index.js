import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 导入对应的路由组件
import HomeContainer from "../components/tabbar/HomeContainer";
import ShoppingContainer from "../components/tabbar/ShoppingContainer";
import SearchContainer from "../components/tabbar/SearchContainer";
import MemberContainer from "../components/tabbar/MemberContainer";
import NewsList from "../news/newList";
import VueResource from "vue-resource"
import NewsInfo from "../news/newsInfo"
Vue.use(VueResource)
Vue.http.options.root = "";
import moment from 'moment';
//全局过滤器
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 按需导入Mint-ui的组件
import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

import MUI from '../assets/mui/css/mui.min.css'
Vue.component(MUI)
Vue.use(Router)


// export default VueResource

export default new Router({
  routes: [
    { path: '/', redirect: '/shopping'},
    { path: '/home', component: HomeContainer},
    { path: '/shopping', component: ShoppingContainer },
    { path: '/member', component: MemberContainer},
    { path: '/search', component: SearchContainer},
    { path: '/home/newsList', component: NewsList},
    { path: '/home/newsInfo/:id', component: NewsInfo}
  ]
})
