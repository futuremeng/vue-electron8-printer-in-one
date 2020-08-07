/*
 * @Date: 2020-08-07 08:43:56
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-08-07 16:17:30
 */
"use strict";

import { app, protocol, BrowserWindow } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";

// import ipcMainEvents from './backgrounds/events'

const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  win.on("closed", () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

// const printer = require("@thiagoelg/node-printer");

// console.log(printer.getPrinters());

// console.log(printer.getPrinter("Deli_DL_886AW"));

// console.log(printer.getPrinterDriverOptions("Deli_DL_886AW"));

// console.log(printer.getDefaultPrinterName());

// var util = require("util"),
//   printerName = "Deli_DL_886AW",
//   printerFormat = "TEXT";

// printer.printDirect({
//   data: "print from Node.JS buffer", // or simple String: "some text"
//   printer: printerName, // printer name
//   type: printerFormat, // type: RAW, TEXT, PDF, JPEG, .. depends on platform
//   // supported page sizes may be retrieved using getPrinterDriverOptions, supports CUPS printing options
//   options: {
//     media: "4*6",
//     "fit-to-page": true,
//   },
//   success: function(jobID) {
//     console.log("sent to printer with ID: " + jobID);
//     var jobInfo = printer.getJob(printerName, jobID);
//     console.log(
//       "current job info:" + util.inspect(jobInfo, { depth: 10, colors: true })
//     );
//     // if (jobInfo.status.indexOf("PRINTED") !== -1) {
//     //   console.log("too late, already printed");
//     //   return;
//     // }
//     // console.log("cancelling...");
//     // var is_ok = printer.setJob(printerName, jobID, "CANCEL");
//     // console.log("cancelled: " + is_ok);
//     // try {
//     //   console.log(
//     //     "current job info:" +
//     //       util.inspect(printer.getJob(printerName, jobID), {
//     //         depth: 10,
//     //         colors: true,
//     //       })
//     //   );
//     // } catch (err) {
//     //   console.log("job deleted. err:" + err);
//     // }
//   },
//   error: function(err) {
//     console.log(err);
//   },
// });

// 初始化事件监听  ipcMain.on event
// Object.keys(ipcMainEvents).forEach(key => {
//   ipcMain.on(key, (event, ...args) => {
//     ipcMainEvents[key](event, winodws, ...args)
//   })
// })
