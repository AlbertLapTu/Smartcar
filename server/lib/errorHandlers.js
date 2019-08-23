module.exports = {
  handleInvalidId: param => {
    const validNumbersRegEx = new RegExp('^[0-9]*$');
    return validNumbersRegEx.test(param);
  }
};
