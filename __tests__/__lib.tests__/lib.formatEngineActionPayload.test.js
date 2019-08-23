const {
  formatEngineActionPayload,
  engineMessagePayload
} = require('../../server/lib/payloadFormattingHelpers');

const execute = require('../../__mocks__/POST/start-Stop/execute.json');
const failed = require('../../__mocks__/POST/start-Stop/failed.json');

const START = { action: 'START' };
const STOP = { action: 'STOP' };

const EXECUTED = {
  data: execute
};

const FAILED = {
  data: failed
};

describe('Format Engine Action function', () => {
  test('Should return a value in all caps', () => {
    let formattedStart = formatEngineActionPayload(START.action);
    let formattedStop = formatEngineActionPayload(STOP.action);

    expect(formattedStart).toBe('START_VEHICLE');
    expect(formattedStop).toBe('STOP_VEHICLE');
  });
});

describe('Format Engine message payload', () => {
  let executedMessage = engineMessagePayload(EXECUTED);
  let failedMessage = engineMessagePayload(FAILED);

  expect(executedMessage.status).toBe('success');
  expect(failedMessage.status).toBe('error');
});
