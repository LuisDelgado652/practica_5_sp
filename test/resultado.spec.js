const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const server = require("../index");

describe("Resultado a crear", () => {
  let mongodb;
  beforeAll(async () => {
    mongodb = await MongoMemoryServer.create();
    const mongo_uri = mongodb.getUri();
    await server(mongo_uri);
  });
  afterAll((done) => {
    done();
  });
  describe("Crear Resultado", () => {
    it("Se creo el resultado", async () => {
      const api_uri = request("http://localhost:3000");
      await api_uri
        .post("/Resultado/Crear")
        .send({
          id_paciente: "64597640657e869bc7247735",
          id_examen: "6459791124d554adc431ba96",
          resultado_examen: "Malo",
          valor_pagado: "$1000",
          observaciones: "se va a morir",
        })
        .expect(200);
    });
  });
});
