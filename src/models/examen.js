const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExamenSchema = new Schema({
  descripcion: { type: String },
  indicacion: { type: String },
});

module.exports = mongoose.model("Examenes", ExamenSchema);
