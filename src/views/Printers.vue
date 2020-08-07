<!--
Date: 2020-08-07 14:59:52
LastEditors: Future Meng
LastEditTime: 2020-08-07 16:11:04
-->
<template>
  <div class="printers">
    <h1>This is an printers page</h1>
  </div>
</template>
<script>
// import { ipcRenderer } from "electron";
export default {
  name: "printers",
  data() {
    return {
      printers: [],
    };
  },
  mounted() {
    // ipcRenderer.send("getPrinters");
    // ipcRenderer.once("getPrinters", (event, data) => {
    //   // 过滤可用打印机
    //   this.printers = data.filter((element) => element.status === 0);
    // });
  },
};
</script>