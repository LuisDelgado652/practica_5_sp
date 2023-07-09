const { Router } = require("express");

module.exports = function ({ ResultadoController }) {
  const router = Router();
  router.post("/Crear", ResultadoController.Crear);
  router.get("/Buscar", ResultadoController.Buscar);
  router.get("/Enlistar", ResultadoController.Enlistar);
  router.delete("/Eliminar", ResultadoController.Eliminar);
  return router;
};
