const iWasCalled = () => {
  return new Error("I was called");
};

module.exports = {
  test(val) {
    throw iWasCalled();
  },
  iWasCalled
};
