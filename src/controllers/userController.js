const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const path = require("path");

const User = require("@models/modelUser");
const config = require('@config/index');
const sendEmail = require('@modules/email/forgotEmail')

const secret = config.secret;

const user = {
  // Hello World
  userHello(req, res) {
    res.send({
      msg: "Hello World!",
    });
  },

  // Register User
  async registerUser(req, res) {
    const {
      name,
      email,
      password,
      confirmpassword
    } = req.body;

    if (!name) {
      return res.status(422).json({
        msg: "O nome é obrigatório"
      });
    }
    if (!email) {
      return res.status(422).json({
        msg: "O email é obrigatório"
      });
    }
    if (!password) {
      return res.status(422).json({
        msg: "A senha é obrigatório"
      });
    }
    if (!confirmpassword) {
      return res
        .status(422)
        .json({
          msg: "A confirmação de senha é obrigatório"
        });
    }

    if (password !== confirmpassword) {
      return res.status(422).json({
        msg: "As senhas não conferem!"
      });
    }

    const existUser = await User.findOne({
      email: req.body.email
    });

    if (existUser) {
      return res.status(422).json({
        msg: "Por favor, utilizar outro e-mail!"
      });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: passwordHash,
    });

    try {
      await user.save();
      res.status(201).json({
        msg: "Usuario criado com sucesso!"
      });
    } catch (error) {
      res.status(500).json({
        msg: error
      });
    }
  },

  // login user
  async loginUser(req, res) {
    const {
      email,
      password
    } = req.body;

    if (!email) {
      return res.status(422).json({
        msg: "O email é obrigatório"
      });
    }
    if (!password) {
      return res.status(422).json({
        msg: "A senha é obrigatória"
      });
    }

    const user = await User.findOne({
      email: email
    });

    if (!user) {
      return res.status(422).json({
        msg: "Usuário não encontrado"
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(422).json({
        msg: "Senha inválida!"
      });
    }

    try {
      const token = jwt.sign({
          id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
        },
        secret
      );

      res.status(200).json({
        msg: "Usuário autenticado com sucesso!",
        token
      });
    } catch (error) {
      res.status(500).json({
        msg: error
      });
    }
  },

  async forgotUser(req, res) {
    const { email } = req.body;

    const existUser = await User.findOne({ email });

    if(!existUser) {
      return res.status(200).json({
        msg: "Usuário não encontrado"
      })
    }

    sendEmail()
  }
};

module.exports = user;