<!--
Date: 2020-08-07 14:59:52
LastEditors: Future Meng
LastEditTime: 2020-09-07 10:43:23
-->
<template>
  <div class="printers">
    <el-button @click="handleGetPrinters">刷新</el-button>
    <el-row :gutter="18">
      <el-col :span="8" v-for="(printer, index) in printers" :key="'p-'+index">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <div>{{printer.name}}</div>
            <el-tag v-if="printer.isDefault">默认</el-tag>
            <el-tag>{{printer.status}}{{printer.status===0?"闲置":"脱机"}}</el-tag>
            <div class="bottom clearfix">
              <el-button class="button" @click="handleGetPrinter">详情</el-button>
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
      this.printers=[];
      console.log("getPrinters...");
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
    handleGetPrinter(name){

      ipcRenderer.send("getPrinter");
      ipcRenderer.once("getPrinter", (event, data) => {
        // 过滤可用打印机
        // this.printers = data.filter((element) => element.status === 0);
        // this.printers = data;
        // console.log(this.printers);
        // // 1.判断是否有打印服务
        // if (this.printers.length <= 0) {
        //   this.$message({
        //     message: "打印服务异常,请尝试重启电脑",
        //     type: "error",
        //   });
        //   this.$emit("cancel");
        // } else {
        //   // this.checkPrinter()
        // }
      });
    }
  },
  mounted() {
    this.handleGetPrinters();
  },
};
</script>