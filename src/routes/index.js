const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");

module.exports = function ({ PacienteRoutes, ExamenRoutes, ResultadoRoutes }) {
  //const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  apiRoutes.use("/Paciente", PacienteRoutes);
  apiRoutes.use("/Examen", ExamenRoutes);
  apiRoutes.use("/Resultado", ResultadoRoutes);
  return apiRoutes;
};
