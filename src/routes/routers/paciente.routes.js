const { Router } = require("express");

module.exports = function ({ PacienteController }) {
  const router = Router();
  router.post("/Crear", PacienteController.Crear);
  return router;
};
