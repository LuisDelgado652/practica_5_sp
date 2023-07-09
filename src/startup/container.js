const { createContainer, asClass, asFunction } = require("awilix");

const app = require(".");

const {
  PacienteRoutes,
  ExamenRoutes,
  ResultadoRoutes,
} = require("../routes/index.routes");

const {
  PacienteController,
  ExamenController,
  ResultadoController,
} = require("../controllers");

const {
  PacienteService,
  ExamenService,
  ResultadoService,
} = require("../services");

const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
  })
  .register({
    PacienteService: asClass(PacienteService).singleton(),
    ExamenService: asClass(ExamenService).singleton(),
    ResultadoService: asClass(ResultadoService).singleton(),
  })
  .register({
    PacienteController: asClass(
      PacienteController.bind(PacienteController)
    ).singleton(),
    ExamenController: asClass(
      ExamenController.bind(ExamenController)
    ).singleton(),
    ResultadoController: asClass(
      ResultadoController.bind(ResultadoController)
    ).singleton(),
  })
  .register({
    PacienteRoutes: asFunction(PacienteRoutes).singleton(),
    ExamenRoutes: asFunction(ExamenRoutes).singleton(),
    ResultadoRoutes: asFunction(ResultadoRoutes).singleton(),
  });

module.exports = container;
