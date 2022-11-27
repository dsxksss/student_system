const jsonfile = require("jsonfile");
const scanline = require("scanline");
const { existsSync } = require("fs");
const DATAPATH = require("./path");

const removeStudent = async () => {
  // 判断是否已存在之前存入的数据
  if (existsSync(DATAPATH)) {
    const studentName = await scanline("请输入你要查找的学生姓名 : ");
    const oldStudents = jsonfile.readFileSync(DATAPATH);

    // 先将新数据设置为一个空数组
    let newStudents = [];

    // 因为获得的是全部学生的数据 -> 数组对象
    // 所以我们要先遍历该数组才可以获得"每一个"的学生信息
    for (let student of oldStudents) {
      // 判断全部学生数据中是否有对应的姓名
      if (student["name"] == studentName) {
        // 如果有,则删除该学生的全部信息
        console.table(student);
        console.log("学生已删除:");

        // 删除对应的学生
        // filter 函数会过滤掉对应的内容，返回一个过滤后的数组
        // 利用这个功能我们就可以获得删除了某个学生后的新数据
        newStudents = oldStudents.filter((e) => e["name"] != studentName);

        // 存入删除之后的新数据
        jsonfile.writeFileSync(DATAPATH, newStudents);
        console.log("\033[32m数据已更新\033[0m");

        return;
      }
    }

    // 如果全部数据都不存在该同学,则告诉用户不存在此人
    console.log("\033[31m不存在此人,请检查名字后重试 \033[1m|0_0|\033[0m");
  } else {
    console.log("\033[31m没有历史数据,请录入数据后再查看\033[0m");
  }
};
module.exports = removeStudent;
