const options = {
  "1": "录入学生",
  "2": "查看已有学生数据",
  "3": "查找学生",
  "4": "删除老数据",
};

function showUi() {
  console.log("\033[32m"); // 改变字体显示颜色
  console.log("************************");
  // 显示options里的内容
  for (let [k, v] of Object.entries(options)) {
    console.log(`输入: ${k}\t${v}`);
  }
  console.log("************************");
  console.log("\033[0m"); //恢复默认显示颜色
}
module.exports = showUi;
