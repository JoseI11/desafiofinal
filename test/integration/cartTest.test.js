import chai from "chai";
import supertest from "supertest";
import mongoose from "mongoose";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("****** Set de pruebas de integración para modulo de carts usando supertest *****", function () {

    before(function () {



        this.cartId = ''

    });
    describe("Set de pruebas para carritos", function () {
        it("POST /api/carts/ Debe crear un carrito correctamente", async function () {
            const result = await requester.post("/api/carts/createcart");

            this.cartId = result._body.payload._id
            console.log(this.cartId)
            expect(result._body.status).to.be.eql('success');
            expect(result._body.payload).to.have.property("_id");
            expect(result._body.payload.products).to.be.eql([]);

        });
        it("GET /api/carts/:cid Debe recuperar un carrito de la base de datos", async function () {
            const result = await requester.get(`/api/carts/${this.cartId}`);
            expect(result._body.payload).to.have.property("_id");
            expect(result._body.payload._id).to.be.eql(`${this.cartId}`);
            expect(result.status).to.be.eql(200);
            expect(result._body.payload).to.have.property('products').to.be.an('array');

        });
        it("DELETE /api/carts/:cid Debe eliminar un carrito de la base de datos correctamente", async function () {
            const result = await requester.delete(`/api/carts/${this.cartId}`);
            expect(result.status).to.be.eql(200);
            expect(result.body).to.be.an('object');
            expect(result._body.status).to.be.eql('success');

        });

    });







});