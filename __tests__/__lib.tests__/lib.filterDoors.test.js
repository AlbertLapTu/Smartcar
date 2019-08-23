const { filterDoors } = require('../../server/lib/payloadFormattingHelpers');

const sedanData = require('../../__mocks__/POST/security/vehicle1234-sedan-security.response.json');
const coupeData = require('../../__mocks__/POST/security/vehicle1235-coupe-security.response.json');

const coupe = {
  data: coupeData
};

const sedan = {
  data: sedanData
};

const coupeDoors = filterDoors(coupe);
const sedanDoors = filterDoors(sedan);

describe('Filter doors function', () => {
  test('Coupe should have two doors', () => {
    expect(coupeDoors.length).toBe(2);
    expect(coupeDoors.length).not.toBe(4);
  });

  test('Sedan should have four doors', () => {
    expect(sedanDoors.length).toBe(4);
    expect(sedanDoors.length).not.toBe(2);
  });

  test('Coupe should only have a front left and front right door', () => {
    let filteredCoupeDoors = { frontLeft: true, frontRight: true };
    for (let i = 0; i < coupeDoors.length; i++) {
      let doorPosition = coupeDoors[i].location;
      expect(filteredCoupeDoors.hasOwnProperty(doorPosition)).toBe(true);
    }
  });

  test('Sedan should have all four doors', () => {
    let allSedanDoors = { frontLeft: true, frontRight: true, backLeft: true, backRight: true };
    for (let i = 0; i < sedanDoors.length; i++) {
      let sedanDoorPosition = sedanDoors[i].location;
      expect(allSedanDoors.hasOwnProperty(sedanDoorPosition)).toBe(true);
    }
  });
});
