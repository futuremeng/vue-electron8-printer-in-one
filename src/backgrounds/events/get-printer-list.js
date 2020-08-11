/*
 * @Date: 2020-08-07 15:54:19
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-08-11 17:41:01
 */

const printer = require("@thiagoelg/node-printer");

// console.log(printer.getPrinters());

export default function getPrinters(event) {
  const { sender } = event;
  let printers = printer.getPrinters();
  // const printers = sender.webContents.getPrinters()
  console.log("printers:", printers);
  sender.webContents.send("getPrinters", printers);
}
