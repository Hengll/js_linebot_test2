import 'dotenv/config'
import linebot from 'linebot'
import commandUSD from './commands/usd.js'
import commandFE from './commands/fe.js'
import commandQR from './commands/qr.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'text') {
    if (event.message.text === 'usd') {
      commandUSD(event)
    } else if (event.message.text === 'fe') {
      commandFE(event)
    } else if (event.message.text === 'qr') {
      commandQR(event)
    } else {
      event.reply('請輸入正確指令喔')
    }
  }
})

bot.on('postback', event => {
  event.reply('postback:' + event.postback.data)
})

bot.listen('/', 3000 || process.env.PORT, () => {
  console.log('啟動')
})
