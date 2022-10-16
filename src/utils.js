module.exports = {
  // 延时函数，防止检测出类似机器人行为操作
  sleep: function (ms = 2) {
    return new Promise((resolve) => setTimeout(resolve, ms * 1000))
  }
}
