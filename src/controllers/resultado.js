let _resultadoservice = null;
class ResultadoController {
  constructor({ ResultadoService }) {
    _resultadoservice = ResultadoService;
  }
  Crear(req, res) {
    return _resultadoservice.crear(req, res);
  }
  Enlistar(req, res) {
    return _resultadoservice.enlistar(req, res);
  }
  Buscar(req, res) {
    return _resultadoservice.buscar(req, res);
  }
  Eliminar(req, res) {
    return _resultadoservice.eliminar(req, res);
  }
}

module.exports = ResultadoController;
