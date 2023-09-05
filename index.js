const express = require('express')
const app = express()
app.post('/SyNZrzEAEgJepbkzVnHtUwyPFbWCEJXA', (req, res) => {
  res.send('tg')
})

app.post('/pBxgAeSeViGnFJGFqhvMgTsPOWcHwIsh', (req, res) => {
  res.send('eth')
})

app.listen(process.env.PORT || 3000)
