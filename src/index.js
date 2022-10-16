const { WechatyBuilder } = require('wechaty')
const dayjs = require('dayjs')
const onMessage = require('./message')
const room = require('./room')
const { sleep } = require('./utils')

async function main () {
  const bot = WechatyBuilder.build({
    name: 'saul-goodman',
    puppet: 'wechaty-puppet-wechat', // 如果有token，记得更换对应的puppet
    puppetOptions: {
      uos: true
    }
  })

  // 二维码生成
  bot.on('scan', (qrcode, status) => {
    // require('qrcode-terminal').generate(qrcode) // 在console端显示二维码
    const qrcodeImageUrl = [
      'https://api.qrserver.com/v1/create-qr-code/?data=',
      encodeURIComponent(qrcode)
    ].join('')

    console.log(qrcodeImageUrl)
  })

  // 登录
  bot.on('login', (user) => {
    console.log(`用户 ${user} 已登录。`)
    console.log(`当前时间:${dayjs().format('YYYY-MM-DD HH:mm:ss')}`)
  })

  // 登出
  bot.on('logout', (user) => {
    console.log(`小助手${user} 已经登出`)
  })

  // 监听对话
  bot.on('message', (message) => {
    onMessage(bot, message)
  })

  try {
    await bot.start()
    console.log('开始登录微信')
    // 等待 2s，免得找不到群聊
    await sleep(2)
    await room(bot)
  } catch (error) {
    console.error('登录微信失败', error)
  }
}

main()
