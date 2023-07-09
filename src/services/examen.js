const { Examenes } = require("../models");

class ExamenService {
  async crear(req, res) {
    const examen = new Examenes(req.body);
    try {
      const examenGuardado = await examen.save();
      return res.json({
        message: "Se creo el examen",
        datos: examenGuardado,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error al crear el examen",
      });
    }
  }
}

module.exports = ExamenService;
