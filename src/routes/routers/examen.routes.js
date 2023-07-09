const { Router } = require("express");

module.exports = function ({ ExamenController }) {
  const router = Router();
  router.post("/Crear", ExamenController.Crear);
  return router;
};
