import expect from "expect";
import renderer from "react-test-renderer";

const checkSnapshot = component => {
  const tree = renderer.create(component).toJSON();
  return expect(tree).toMatchSnapshot();
};

export default checkSnapshot;
