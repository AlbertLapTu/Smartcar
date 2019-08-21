const invalidResponse = id => {
  const invalidResponseObject = {
    status: 404,
    reason: `Vehicle id: ${id} not found`
  };

  return JSON.stringify(invalidResponse);
};

module.exports = { invalidResponse };
