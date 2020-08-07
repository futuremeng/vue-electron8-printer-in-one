/*
 * @Date: 2020-08-07 15:54:19
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-08-07 16:00:51
 */

function getPrinters(event) {
  const { sender } = event;
  const list = sender.webContents.getPrinters();
  sender.webContents.send("getPrinters", list);
}

const printer = {
  getPrinters,
};

export default printer;
