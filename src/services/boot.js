const app = require("@app");
const config = require("@config/index.js");

const fs = require('fs')
const https = require('https')

module.exports = (err) => {
  console.clear();
  if (err) {
    return console.log("Ocorreu um erro ao iniciar o server! ", err);
  }

  app.listen(config.app.port, (err) => {
    if (err) {
      console.log("Ocorreu um erro ao iniciar o server! ", err);
    }

    console.log(`Server online![http] na porta ${config.app.port}`);
  });
};
