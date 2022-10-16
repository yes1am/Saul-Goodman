// 消息
module.exports = async function (bot, message) {
  const contact = message.talker() // 消息来源
  const content = message.text().trim() // 消息内容
  const room = message.room() // 是否是群消息
  const fromUser = await contact.alias() || await contact.name() // 发消息人备注
  const isText = message.type() === bot.Message.Type.Text
  // 收到的提醒
  const mentions = await message.mentionList()
  if (message.self()) {
    return
  }
  // 只处理文字信息
  if (isText) {
    if (room) {
      if (mentions?.length) {
        // message.mentionList() 数组前面是被艾特的人，数组最后一个元素是「发消息的人，等于 fromUser」
        await room.say(`
收到消息: ${content}。
    
${fromUser} 不要艾特我，我什么都不会。`)
      } else {
        // 如果是群消息 目前只处理文字消息
        const topic = await room.topic()
        console.log(`群名: ${topic} 发消息人: ${fromUser} 内容: ${content}`)
      }
    } else {
      // 如果非群消息 目前只处理文字消息
      console.log(`发消息人: ${fromUser} 消息内容: ${content}`)
      await contact.say(`收到:${content}`)
    }
  }
}
