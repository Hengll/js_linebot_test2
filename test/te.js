import axios from 'axios';

(async () => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    console.log(data)
  } catch (err) {
    console.log(err)
  }
})()
