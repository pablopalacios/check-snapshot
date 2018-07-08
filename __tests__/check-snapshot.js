const React = require("react");
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
});
