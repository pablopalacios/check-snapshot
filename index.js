const expect = require("expect");
const renderer = require("react-test-renderer");

const checkSnapshot = component => {
  const tree = renderer.create(component).toJSON();
  return expect(tree).toMatchSnapshot();
};

module.exports = checkSnapshot;
