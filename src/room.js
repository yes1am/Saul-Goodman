// 群聊
module.exports = async function (bot) {
  // topic 为群名称
  const currentRoomName = '吃饭群'
  const currentRoom = await bot.Room.find({ topic: currentRoomName })
  if (currentRoom) {
    // 有新成员加入
    currentRoom.on('join', (inviteeList, inviter) => {
      let welcomeStr = ''
      const inviteeNameList = inviteeList.map(item => item?.payload?.name).filter(Boolean).join(',')
      if (inviteeNameList) {
        welcomeStr = `欢迎新成员: ${inviteeNameList} 加入「${currentRoomName}」。`
        if (inviter?.payload?.name) {
          welcomeStr = `欢迎新成员: ${inviteeNameList} 加入「${currentRoomName}」, 由 ${inviter?.payload?.name} 邀请。`
        }
      }
      currentRoom.say(welcomeStr)
    })
  }
}
