// 全部功能选项
const storageStudent = require("./storageStudent");
const listStudents = require("./listStudents");
const findStudent = require("./findStudent");
const removeStudent = require("./removeStudent");
const removeAll = require("./removeAll");
const exit = require("./exit");
const selects = {
  //  "1": "录入学生",
  "1": storageStudent,
  // "2": "列出全部学生数据",
  "2": listStudents,
  // "3": "查找学生",
  "3": findStudent,
  // "4": "删除学生",
  "4": removeStudent,
  // "5": "删除全部数据",
  "5": removeAll,
  // "6": "结束程序",
  "6": exit,
};

// 显示菜单界面
const showUi = require("./ui");
showUi();

// 组织程序的"整体"运行逻辑
const scanline = require("scanline");
const run = async () => {
  const select = await scanline("请输入你的选项 \033[1m\033[34m-> \033[0m");
  // 匹配用户按下选项后触发对应的功能
  if (selects[select] != undefined) {
    // 因为触发的是一个函数所以得在后面加上()号
    selects[select]();
  } else {
    console.log("选择错误,请重新运行该程序");
    // 如果选择错误则重新运行程序
    run();
  }
};

// 开始运行
run();
// 虽然可以使用switch方法,但是该方法过于庞杂

// switch (select) {
//   case "1":
//     selects.storageStudent();
//     break;
//   case "2":
//     ....
//   default:
//     console.log("选择错误,请重新运行该程序");
// }
