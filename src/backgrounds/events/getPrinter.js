/*
 * @Date: 2020-08-07 15:54:19
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-08-11 18:07:02
 */

const printer = require("@thiagoelg/node-printer");

// console.log(printer.getPrinters());

export default function getPrinter(event,name) {
  const { sender } = event;
  let current = printer.getPrinter(name);
  // const printers = sender.webContents.getPrinters()
  console.log("printer:", current);
  sender.webContents.send("getPrinter", current);
}
