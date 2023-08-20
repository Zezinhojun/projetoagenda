const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    if (this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email });
    if (!this.user) {
      this.errors.push("Usuario não existe.");
      return;
    }

    if (!bcrypt.compareSync(this.body.password, this.user.password)) {
      this.errors.push("Senha inválida.");
      this.user = null;
      return;
    }
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

    await this.userExist();

    if (this.errors.length > 0) return;

    const salt = bcrypt.genSaltSync();
    this.body.password = bcrypt.hashSync(this.body.password, salt);

    try {
      this.user = await LoginModel.create(this.body);
    } catch (error) {
      console.log(error);
    }
    {
    }
  }

  async userExist() {
    this.user = await LoginModel.findOne({ email: this.body.email });

    if (this.user) this.errors.push("Usuario já existe");
  }

  valida() {
    //Validação
    this.cleanUp();
    //O email precisa ser valido
    if (!validator.isEmail(this.body.email)) {
      this.errors.push("E-mail Inválido");
    }
    //A senha precisa está entre 3 e 50 caracteres
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push("Senha deve ter mais que 3 e menos que 50 caracteres");
    }
  }

  cleanUp() {
    for (let key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;
