const mongoose = require("mongoose");
const { Schema } = mongoose;

const PacienteSchema = new Schema({
  nombre: { type: String },
  identificacion: { type: String },
  edad: { type: String },
});

module.exports = mongoose.model("Pacientes", PacienteSchema);
