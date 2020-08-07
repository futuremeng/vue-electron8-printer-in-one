/*
 * @Date: 2020-08-07 08:39:00
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-08-07 16:21:55
 */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import inject from "./plugins/inject";
Vue.use(inject);
Vue.use(ElementUI, { size: "small", zIndex: 3000 });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
