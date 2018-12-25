const expect = require("expect");
const renderer = require("react-test-renderer");

const checkSnapshot = (component, options) => {
  const tree = renderer.create(component, options).toJSON();
  return expect(tree).toMatchSnapshot();
};

module.exports = checkSnapshot;
