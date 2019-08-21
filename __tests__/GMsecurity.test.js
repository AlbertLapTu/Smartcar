const postMock = require('../__mocks__/POST/security/securityMocks');
const invalidMock = require('../__mocks__/utils/globalMocks');

describe('POST Request to GM for vehicle security information', () => {
  let sedan = null;
  let twoDoorCoupe = null;
  let invalidVehicle9999 = null;
  let invalidVehicle2000 = null;

  beforeAll(() => {
    postMock
      .getSedanSecurityInfo()
      .then(res => {
        sedan = res;
      })
      .catch(err => {
        throw new Error('Unable to retrieve sedan JSON info in promise');
      });

    postMock
      .getCoupeSecurityInfo()
      .then(res => {
        twoDoorCoupe = res;
      })
      .catch(err => {
        throw new Error('Unable to receive coupe JSON within promise');
      });

    invalidMock
      .getInvalidVehicle(9999)
      .then(res => {
        invalidVehicle9999 = res;
      })
      .catch(err => {
        throw new Error('Unable to receive invalid vehicle data within promise');
      });

    invalidMock
      .getInvalidVehicle(2000)
      .then(res => {
        invalidVehicle2000 = res;
      })
      .catch(err => {
        throw new Error('Unable to receive invalid vehicle data within promise');
      });
  });

  test('Vehicle test data must contain a truthy value', () => {
    expect(sedan).toBeTruthy();
    expect(twoDoorCoupe).toBeTruthy();
    expect(invalidVehicle9999).toBeTruthy();
    expect(invalidVehicle2000).toBeTruthy();
    expect(twoDoorCoupe).not.toEqual(null);
    expect(invalidVehicle2000).not.toEqual(null);
    expect(invalidVehicle2000).not.toEqual(null);
  });

  test("Sedan's should have four doors", () => {
    const sedanDoorPositions = ['frontLeft', 'frontRight', 'backLeft', 'backRight'];
    const falseDoorPositions = ['topLeft', 'passengerSide', 'windowLeft', 'window'];

    const { values } = sedan.data.data.doors;

    //Values corresponds to the door array
    //Individual value corresponds to the tire position
    for (let i = 0; i < values.length; i++) {
      const { value } = values[i].location;
      expect(sedanDoorPositions).toContain(value);
      expect(falseDoorPositions).toEqual(expect.not.arrayContaining([value]));
    }

    expect(Array.isArray(sedan.data.data.doors.values)).toBe(true);
    expect(sedan.data.data.doors.values.length).toBe(4);
  });

  test("Coupe's should have two doors", () => {
    const coupeDoorPositions = ['frontLeft', 'frontRight'];
    const falseCoupeDoorPositions = ['topLeft', 'topRight', 'passenger', 'driver', 'backLeft'];

    const { values } = twoDoorCoupe.data.data.doors;

    for (let i = 0; i < values.length; i++) {
      const { value } = values[i].location;

      expect(coupeDoorPositions).toContain(value);
      expect(falseCoupeDoorPositions).toEqual(expect.not.arrayContaining([value]));
    }
    expect(Array.isArray(twoDoorCoupe.data.data.doors.values)).toBe(true);
    expect(twoDoorCoupe.data.data.doors.values.length).toBe(2);
  });

  test('Invalid cars should not have a doors property', () => {
    expect({ doors: 'values' }).toEqual(expect.not.objectContaining(invalidVehicle2000));
    expect({ doors: 'values' }).toEqual(expect.not.objectContaining(invalidVehicle9999));
    expect(invalidVehicle9999.data.doors).toBeUndefined();
    expect(invalidVehicle2000.data.doors).toBeUndefined();
  });

  test("Invalid car's should return a status code 404", () => {
    expect(invalidVehicle9999.data.status).toBe('404');
    expect(invalidVehicle2000.data.status).toBe('404');
  });

  test('Should return a status 200 on success', () => {
    expect(sedan.data.status).toBe('200');
    expect(twoDoorCoupe.data.status).toBe('200');
  });
});
