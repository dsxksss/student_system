const jsonfile = require("jsonfile");
const scanline = require("scanline");
const { existsSync } = require("fs");
const DATAPATH = require("./path");

const findStudent = async () => {
  // 判断是否已存在之前存入的数据
  if (existsSync(DATAPATH)) {
    const studentName = await scanline("请输入你要查找的学生姓名 : ");
    const students = jsonfile.readFileSync(DATAPATH);

    // 因为获得的是全部学生的数据 -> 数组对象
    // 所以我们要先遍历该数组才可以获得"每一个"的学生信息
    for (let student of students) {
      // 判断全部学生数据中是否有对应的姓名
      if (student["name"] == studentName) {
        // 如果有,则显示该学生的全部信息
        console.table(student);
        // 显示完成退出程序
        return;
      }
    }

    // 如果全部数据都不存在该同学,则告诉用户不存在此人
    console.log("\033[31m不存在此人,请检查名字后重试 \033[1m|0_0|\033[0m");
  } else {
    console.log("\033[31m没有历史数据,请录入数据后再查看\033[0m");
  }
};
module.exports = findStudent;
