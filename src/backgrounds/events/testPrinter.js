/*
 * @Date: 2020-09-08 16:42:24
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-09-11 13:22:53
 */
const printer = require("@thiagoelg/node-printer");

// console.log(printer.getPrinters());
const tsc = require("../../gprint/tsc.js");

export default function testPrinter(event) {
  const { sender } = event;
  // console.log('default printer name: ' + (printer.getDefaultPrinterName() || 'is not defined on your computer'));
  var command = tsc.jpPrinter.createNew();
  console.log(command);
  command.setSize(60, 40);
  command.setGap(2);
  command.setCls();
  command.setText(50, 10, "2", 1, 1, "Hello");
  command.setText(50, 100, "TSS24.BF2", 1, 1, "一二三");
  // command.setQR(50, 50, "L", 5, "A", "977767937@qq.com");
  command.setPagePrint();

  var uint8Buf = command.getData();
  //下面这种来自于uni的版本，大概不依赖nodejs吧，在nodejs环境下不行。
  // var data = Array.from(uint8Buf);
  // var buffer = new ArrayBuffer(data.length);
  
  // var dataView = new DataView(buffer);
  // for (var i = 0; i < data.length; ++i) {
  //   dataView.setUint8(i, data[i]);
  // }
  // console.log(
  //   "data type is: " + typeof data + ", is buffer: " + Buffer.isBuffer(data)
  // );
  
  var buffer=Buffer.from(uint8Buf);
  console.log(
    "buffer type is: " + typeof buffer + ", is buffer: " + Buffer.isBuffer(buffer)
  );
  var jobid = "";
  printer.printDirect({
    data: buffer, // or simple String: "some text"
    printer: "Deli_DL_888B_NEW_", // printer name, if missing then will print to default printer
    type: "RAW", // type: RAW, TEXT, PDF, JPEG, COMMAND.. depends on platform
    success: function(jobID) {
      console.log("sent to printer with ID: " + jobID);
      jobid = jobID;
    },
    error: function(err) {
      console.log(err);
    },
  });

  sender.webContents.send("jobid", jobid);
}
