const Calender = require('Calender')

const calender = {
  async addEvent(req, res) {
    const {
      email,
      nameEvent,
      timeInit,
      timeEnd
    } = req.body

    if(email === '') {
      return res.status(422).json({
        msg: "O email é obrigatório"
      });
    }

    if(nameEvent === '') {
      return res.status(422).json({
        msg: "O nome do evento é obrigatório"
      });
    }

    if(timeInit === '') {
      return res.status(422).json({
        msg: "O inicio do evento é obrigatório"
      });
    }

    if(timeEnd === '') {
      return res.status(422).json({
        msg: "O fim do evento é obrigatório"
      });
    }

    const Calender = new Calender({
      email: email,
      nameEvent: nameEvent,
      timeInit: timeInit,
      timeEnd: timeEnd,
    });

    try {
      await Calender.save();
      res.status(201).json({
        msg: "Evento criado com sucesso!"
      });
    } catch (error) {
      res.status(500).json({
        msg: error
      });
    }

  }

}

module.exports = calender