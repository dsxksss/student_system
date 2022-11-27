const jsonfile = require("jsonfile");
const scanline = require("scanline");
const { existsSync } = require("fs");
const DATAPATH = require("./path");

const storageStudent = async () => {
  // 读取用户输入
  const name = await scanline("请输入你的姓名");
  const age = await scanline("请输入你的年龄:");
  // 合并用户输入的内容
  const student = {
    name,
    age,
  };

  let oldData = [];
  // 判断是否已存在之前存入的数据
  if (existsSync(DATAPATH)) {
    // 如果存在的话则读取并且保存到oldData变量里
    oldData = jsonfile.readFileSync(DATAPATH);
  }

  // 合并存入新老数据
  jsonfile.writeFileSync(DATAPATH, [...oldData, student]);
  console.log("\033[32m数据已保存\033[0m");
};

module.exports = storageStudent;
