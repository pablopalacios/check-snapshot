import React from "react";
import { iWasCalled } from "../snapshot-serializer";
import checkSnapshot from "../";

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
