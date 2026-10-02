import "dotenv/config";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import { randomUUID } from "node:crypto";
import app, { client } from "../app";

let userId: number;
let token: string;

beforeEach(async () => {
    const user = await client.user.create({
        data: {
            email: `test-${randomUUID()}@example.com`,
            password: "TestPassword123!",
        },
    });

    userId = user.id;
    token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET!
    );
});

afterEach(async () => {
    // Remove records belonging to the test user.
    await client.bilty.deleteMany({
        where: { userId },
    });

    await client.biltyCounter.deleteMany({
        where: { userId },
    });

    await client.user.delete({
        where: { id: userId },
    });
});


const biltyData1 = {
    consignorName: "ABC Traders",
    consignorGST: "22AAAAA0000A1Z5",
    consigneeName: "XYZ Enterprises",
    consigneeGST: "22BBBBB0000B1Z5",
    vehicleNumber: "CG04AB1234",
    driverName: "Rahul Sharma",
    driverPhone: "9876543210",
    goodsDescription: "Electronic goods",
    quantity: 50,
    weight: 1200,
    freight: 15000,
    status: "Created"
};


const biltyData2 = {
    consignorName: "ABC Traders",
    consignorGST: "22AAAAA0000A1Z5",
    consigneeName: "XYZ Enterprises",
    consigneeGST: "22BBBBB0000B1Z5",
    vehicleNumber: "CG04AB1234",
    driverName: "Rahul Sharma",
    driverPhone: "9876543210",
    goodsDescription: "Electronic goods",
    quantity: 50,
    weight: 1200,

};
const biltyData3 = {
    consignorName: "ABdbC Traders",
    consignorGST: "22BBAAA0000A1Z5",
    consigneeName: "XYfvZ Enterprises",
    consigneeGST: "22BAABB0000B1Z5",

};
const biltyData4 = {
    consignorName: "ABdbC Traders",
    consignorGST: "22BBA00A1Z5",
    consigneeName: "XYfvZ Enterprises",
    consigneeGST: "22BB000B1Z5",

};

describe("POST /create-bilty", () => {
    it("it should return 201, bilty created", async () => {

        const response = await request(app)
            .post("/create-bilty")
            .set("Authorization", `Bearer ${token}`)
            .send(biltyData1);

        expect(response.status).toBe(201);
    })
    it("it should return 400, invalid credentials", async () => {
        const response = await request(app)
            .post("/create-bilty")
            .set("Authorization", `Bearer ${token}`)
            .send(biltyData2);

        expect(response.status).toBe(400);
    })
    it("it should return 401, invalid credentials", async () => {


        const response = await request(app)
            .post("/create-bilty")
            .set("Authorization", `Bearer`)
            .send(biltyData2);

        expect(response.status).toBe(401);
    })
    it("it should generate unique sequential bily numbers for concurrent request", async()=>{
        await createBilty();

        const requests = Array.from({length: 5},(_,i)=>{
            return request(app)
            .post("/create-bilty")
            .set("Authorization", `Bearer ${token}`)
            .send({
                ...biltyData1,
                vehicleNumber : `CG04AB${1000+i}`,
            });
        });

        const responses = await Promise.all(requests);

        responses.forEach((response, i) => {
            expect(response.status, `Request ${i + 1}: ${JSON.stringify(response.body)}`)
        .toBe(201);
});
        const bilties = responses.map(response => response.body.bilty);

        expect(new Set(bilties.map(b => b.id)).size).toBe(5);

    // Each bilty should have a unique bilty number.
        const numbers = bilties.map(b => b.biltyNumber);
        expect(new Set(numbers).size).toBe(5);

        // Verify sequential numbering.
        expect([...numbers].sort((a, b) => a - b))
            .toEqual([2, 3, 4, 5, 6]);
        },15000)
    
},)
describe("GET /dashboard", () => {
    it("it should give 200", async () => {

        const response = await request(app)
            .get("/dashboard")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
    })
})

async function createBilty() {
  const response = await request(app)
    .post("/create-bilty")
    .set("Authorization", `Bearer ${token}`)
    .send(biltyData1);
console.log("POST response:", response.status, response.body);
  expect(response.status).toBe(201);
  return response.body.bilty;

  
}
describe("PATCH /bilties/:id", () => {
        it("it should give 200", async () => {
            const bilty = await createBilty();
            const response = await request(app)
                .patch(`/bilties/${bilty.id}`)
                .set("Authorization", `Bearer ${token}`)
                .send(biltyData3);

            expect(response.status).toBe(200);
        })

        it("it should give 400 invalid input", async () => {
            const bilty = await createBilty();
            const response = await request(app)
                .patch(`/bilties/${bilty.id}`)
                .set("Authorization", `Bearer ${token}`)
                .send(biltyData4);

            expect(response.status).toBe(400);
        })
        it("it should give 404 bilty not found", async () => {
            const bilty = await createBilty();
            const response = await request(app)
                .patch(`/bilties/9999`)
                .set("Authorization", `Bearer ${token}`)
                .send(biltyData3);

            expect(response.status).toBe(404);
        })
    })





describe("DELETE /bilties/1", () => {
    it("it should give 200 bilty deleted", async () => {
        const bilty = await createBilty();
        const response = await request(app)
            .delete(`/bilties/${bilty.id}`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
    })
    it("it should give 404 bilty not found error", async () => {
        const response = await request(app)
            .delete(`/bilties/9999`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(404);
    })
})










