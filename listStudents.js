const jsonfile = require("jsonfile");
const { existsSync } = require("fs");
const DATAPATH = require("./path");

const listStudents = () => {
  // 判断是否已存在之前存入的数据
  if (existsSync(DATAPATH)) {
    const students = jsonfile.readFileSync(DATAPATH);
    console.table(students);
    // table函数可以只查看部分数据
    // 下面这个例子就只查看name数据
    // console.table(students, ["name"]);
  } else {
    console.log("\033[31m没有历史数据,请录入数据后再查看\033[0m");
  }
};
module.exports = listStudents;
