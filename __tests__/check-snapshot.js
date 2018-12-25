const React = require("react");
const renderer = require("react-test-renderer");
const iWasCalled = require("../snapshot-serializer").iWasCalled;
const checkSnapshot = require("../");

const FixtureComponent = React.createElement(
  "p",
  null,
  "I'm a fixture component"
);

describe("check-snapshot", () => {
  it("works...", () => {
    expect(() => checkSnapshot(FixtureComponent)).toThrow(iWasCalled());
  });

  it("can pass options to renderer", () => {
    jest.mock("react-test-renderer");

    const options = { some: "option" };
    renderer.create = jest.fn(() => ({ toJSON: jest.fn() }));

    expect(() => checkSnapshot(FixtureComponent, options)).toThrow(
      iWasCalled()
    );
    expect(renderer.create).toHaveBeenCalledWith(FixtureComponent, options);
  });
});
