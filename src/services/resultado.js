const { mongo } = require("mongoose");
const { Resultados } = require("../models");

class ResultadoService {
  async crear(req, res) {
    const resultado = new Resultados(req.body);
    try {
      const resultadoGuardado = await resultado.save();
      return res.status(200).json({
        message: "Se creo el resultado",
        datos: resultadoGuardado,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Error al guardar el resultado",
      });
    }
  }
  async buscar(req, res) {
    try {
      const resultado = await Resultados.findById({
        _id: mongo.ObjectId(req.body.id),
      });
      return res.json({
        datos: resultado,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error al buscar el resultado",
      });
    }
  }

  async enlistar(req, res) {
    try {
      const resultados = await Resultados.find();
      return res.json({
        datos: resultados,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error al enlistar los resultados",
      });
    }
  }

  async eliminar(req, res) {
    try {
      await Resultados.findByIdAndRemove({
        _id: mongo.ObjectId(req.body.id),
      });
      return res.json({
        message: "Se elimino el resultado",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error al eliminar el resultado",
      });
    }
  }
}

module.exports = ResultadoService;
