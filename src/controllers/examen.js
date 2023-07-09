let _examenservice = null;
class ExamenController {
  constructor({ ExamenService }) {
    _examenservice = ExamenService;
  }
  Crear(req, res) {
    return _examenservice.crear(req, res);
  }
}

module.exports = ExamenController;
