/*
 * @Date: 2020-09-08 16:42:24
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-09-09 18:03:30
 */
const printer = require("@thiagoelg/node-printer");

// console.log(printer.getPrinters());
const tsc = require("../../gprint/tsc.js");

export default function testPrinter(event) {
  const { sender } = event;
  // console.log('default printer name: ' + (printer.getDefaultPrinterName() || 'is not defined on your computer'));
  // var command = tsc.jpPrinter.createNew();
  // console.log(command)
  // command.setSize(40, 60);
  // command.setGap(2);
  // command.setCls();
  // command.setText(50, 10, "TSS24.BF2", 1, 1, "打印测试");
  // // command.setQR(50, 50, "L", 5, "A", "977767937@qq.com");
  // command.setPagePrint();

  // let data = command.getData();
  // let data = 'TEXT 50,50,"4",0,1,1,"DEMO FOR TEXT"';
  let data = "Test";
  let jobid = "";
  printer.printDirect({
    data: data, // or simple String: "some text"
    printer:'Deli_DL_888B_NEW_', // printer name, if missing then will print to default printer
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
