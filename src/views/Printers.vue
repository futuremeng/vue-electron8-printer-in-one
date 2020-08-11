<!--
Date: 2020-08-07 14:59:52
LastEditors: Future Meng
LastEditTime: 2020-08-11 17:38:40
-->
<template>
  <div class="printers">
    <el-button @click="handleGetPrinters">刷新</el-button>
    <el-row :gutter="18">
      <el-col
        :span="8"
        v-for="(printer, index) in printers"
        :key="'p-'+index"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>{{printer.name}}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const { ipcRenderer } = window.require("electron");
import path from "path";
import fs from "fs";
export default {
  name: "printers",
  data() {
    return {
      printers: [],
    };
  },
  methods: {
    handleGetPrinters() {
      console.log('getPrinters...');
      ipcRenderer.send("getPrinters");
      ipcRenderer.once("getPrinters", (event, data) => {
        // 过滤可用打印机
        // this.printers = data.filter((element) => element.status === 0);
        this.printers = data;
        console.log(this.printers);
        // 1.判断是否有打印服务
        if (this.printers.length <= 0) {
          this.$message({
            message: "打印服务异常,请尝试重启电脑",
            type: "error",
          });
          this.$emit("cancel");
        } else {
          // this.checkPrinter()
        }
      });
    },
  },
  mounted() {
    console.log("printers");
  },
};
</script>