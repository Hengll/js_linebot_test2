export default async event => {
  try {
    const result = await event.reply({
      type: 'text',
      text: '123',
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              // 按下用使用者會傳送的文字
              text: 'ubike',
              // 按鈕顯示文字
              label: '台北市'
            }
          },
          {
            type: 'action',
            action: {
              type: 'uri',
              uri: 'https://x.com',
              label: '網站'
            }
          },
          {
            type: 'action',
            action: {
              type: 'postback',
              label: 'postback',
              data: 'aaa'
            }
          }
        ]
      }
    })
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}
