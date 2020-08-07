/*
 * @Date: 2020-08-07 15:28:13
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-08-07 15:36:04
 */
const printer = require("@thiagoelg/node-printer");
const Store = require("electron-store");

const store = new Store();

export function getDefaultPrinter() {
  return printer.getPrinter(printer.getDefaultPrinterName());
}

export function getPrinter(name) {
  return printer.getPrinter(name);
}

export function getPrinters() {
  let printers = printer.getPrinters();
  store.set("pinters", printers);
  return printers;
}
