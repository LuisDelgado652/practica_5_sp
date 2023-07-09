const { Pacientes } = require("../models");

class PacienteService {
  async crear(req, res) {
    const paciente = new Pacientes(req.body);
    try {
      const pacienteGuardado = await paciente.save();
      return res.json({
        message: "Se creo un nuevo paciente",
        datos: pacienteGuardado,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error al crear el paciente",
      });
    }
  }
}

module.exports = PacienteService;
