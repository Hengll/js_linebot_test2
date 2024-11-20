import 'dotenv/config'
import linebot from 'linebot'
import commandUSD from './commands/usd.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'text') {
    if (event.message.text === 'usd') {
      commandUSD(event)
    }
  }
})

bot.listen('/', 3000 || process.env.PORT, () => {
  console.log('啟動')
})