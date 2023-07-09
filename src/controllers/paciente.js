let _pacienteservice = null;
class PacienteController {
  constructor({ PacienteService }) {
    _pacienteservice = PacienteService;
  }
  Crear(req, res) {
    return _pacienteservice.crear(req, res);
  }
}

module.exports = PacienteController;
