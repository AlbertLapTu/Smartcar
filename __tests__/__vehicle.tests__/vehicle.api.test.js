const request = require('supertest');
const app = require('../../server/server');

const sedan = {
  vin: '123123412412',
  color: 'Metallic Silver',
  doorCount: 4,
  driveTrain: 'v8'
};

const twoDoorCoupe = {
  vin: '1235AZ91XP',
  color: 'Forest Green',
  doorCount: 2,
  driveTrain: 'electric'
};

describe('SmartCar API', () => {
  describe('GET request to endoint /vehicles/:id', () => {
    test('Should return the correct response for vehicle 1234', async () => {
      let sedanResponse = await request(app).get('/vehicles/1234');
      expect(JSON.parse(sedanResponse.text)).toEqual(expect.objectContaining(sedan));
    });
    test('Should return the correct response for vehicle 1235', async () => {
      let coupeResponse = await request(app).get('/vehicles/1235');
      expect(JSON.parse(coupeResponse.text)).toEqual(expect.objectContaining(twoDoorCoupe));
    });
    test('Should respond back with a 200 status code when sending correct id', async () => {
      let sedanResponse = await request(app).get('/vehicles/1234');
      let coupeResponse = await request(app).get('/vehicles/1235');
      expect(sedanResponse.status).toBe(200);
      expect(coupeResponse.status).toBe(200);
    });
    test('Should return 404 if sending an invalid id', async () => {
      let invalidResponse = await request(app).get('/vehicles/1111');
      expect(invalidResponse.status).toBe(404);
    });
  });

  describe('GET request to the endpoint /vehicles/:id/doors', () => {
    test('Should return 404 if sending an invalid id', async () => {
      let invalidResponse = await request(app).get('/vehicles/1555/doors');
      expect(invalidResponse.status).toBe(404);
    });
    test('Should respond back with a 200 OK status code when sending correct id', async () => {
      let sedanResponse = await request(app).get('/vehicles/1234/doors');
      let coupeResponse = await request(app).get('/vehicles/1235/doors');
      expect(sedanResponse.status).toBe(200);
      expect(coupeResponse.status).toBe(200);
    });
  });

  describe('GET request to the endpoint /vehicles/:id/fuel', () => {
    test('Should return 404 if sending an invalid id', async () => {
      let invalidResponse = await request(app).get('/vehicles/1723/fuel');
      expect(invalidResponse.status).toBe(404);
    });
    test('Should return a status 200 OK if endpoint is up', async () => {
      let sedanResponse = await request(app).get('/vehicles/1234/fuel');
      expect(sedanResponse.status).toBe(200);
    });
  });

  describe('GET request to the endpoint /vehicles/:id/battery', () => {
    test('Should return 404 if sending an invalid id', async () => {
      let invalidResponse = await request(app).get('/vehicles/1512/battery');
      expect(invalidResponse.status).toBe(404);
    });
    test('Should return a status 200 OK if endpoint is up', async () => {
      let sedanResponse = await request(app).get('/vehicles/1234/battery');
      let coupeResponse = await request(app).get('/vehicles/1235/battery');
      expect(sedanResponse.status).toBe(200);
      expect(coupeResponse.status).toBe(200);
    });
  });

  describe('POST request to the endpoint /vehicles/:id/engine', () => {
    test('Should return a status 201 if endpoint is up', async () => {
      let sedanResponseToStart = await request(app)
        .post('/vehicles/1234/engine')
        .send({ action: 'START' });
      expect(sedanResponseToStart.status).toBe(200);
    });
  });
});
