require('dotenv').config();
require('module-alias/register')
const app = require('@app');

const config = require('@config/index.js')

app.listen(config.app.port, (err) => {
  if(err) {
    console.log('Ocorreu um erro ao iniciar o server! ', err)
  }

  console.log(`Server online! na porta ${config.app.port}`)
})
