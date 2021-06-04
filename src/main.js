import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {initMenu} from "@/utils/menus";
import 'font-awesome/css/font-awesome.min.css'


import {postRequest} from "./utils/api"
import {postKeyValueRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";

Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;

Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
  if (to.path == '/') {
    next();
  } else {
      if (window.sessionStorage.getItem("user")){
        initMenu(router, store);
        next();
      } else {

        next('/?redirect=' + to.path);

      }

  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
