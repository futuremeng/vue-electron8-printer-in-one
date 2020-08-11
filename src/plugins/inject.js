/*
 * @Date: 2020-08-11 17:12:02
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-08-11 17:17:09
 */
// eslint-disable-next-line
const { remote } = window.require("electron");
export default {
  /* eslint no-param-reassign: "error" */
  install(Vue) {
    Vue.prototype.$electronStore = remote.getGlobal("electronStore");
    Vue.prototype.$webContents = remote.getGlobal("webContents");
    Vue.prototype.$mainWin = remote.getGlobal("mainWin");
  },
};
