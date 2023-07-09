const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResultadoSchema = new Schema({
  id_paciente: { type: Schema.Types.ObjectId },
  id_examen: { type: Schema.Types.ObjectId },
  resultado_examen: { type: String },
  valor_pagado: { type: String },
  observaciones: { type: String },
});

module.exports = mongoose.model("Resultados", ResultadoSchema);
