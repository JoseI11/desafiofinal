import chai from "chai";
import supertest from "supertest";



const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Set de pruebas de integración para modulo de sesiones", function () {
  this.timeout(10000)
  it("POST /api/sessions/login: Debe loguear correctamente al usuario y devolver una cookie", async function () {
    const mockUser = {
      email: "correos2@com",
      password: "1234",
    };

    const result = await requester.post("/api/sessions/login").send(mockUser);

    expect(result._body.payload).to.have.property("_id");
    expect(result.status).to.be.eql(200)
  });

  it("GET /api/sessions/current: Debe mostrar la información contenida dentro de la sesion", async function () {
    
    let result = await requester.get("/api/sessions/current");

    expect(result.payload.email).to.be.eql("correos2@com");
    expect(result.status).to.be.eql(200)
  })
  describe("Set de pruebas para flujo de sesión", function () {

   
  });
});