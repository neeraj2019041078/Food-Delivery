import request from "supertest";
import app from "../app.js";

describe("Health check", () => {
  it("GET /api/health should return 200 and status ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

describe("Root route", () => {
  it("GET / should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});