const scanline = require("scanline");
const DATAPATH = require("./path");
const { existsSync, unlinkSync } = require("fs");

const removeAll = async () => {
  const yn = await scanline("\033[31m你确认要删除全部学生数据吗!(Y:确认/任意键:取消) : \033[0m");
  if (yn === "y" || yn === "Y") {
    if (existsSync(DATAPATH)) {
      unlinkSync(DATAPATH);
      console.log("\033[31m已清除全部学生数据\033[0m");
    } else {
      console.log("\033[31m没有历史数据,不需要清除\033[0m");
    }
  } else {
    console.log("\033[32m已取消清除操作\033[0m");
  }
};
module.exports = removeAll;
