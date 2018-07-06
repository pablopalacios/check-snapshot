import React from "react";
import { iWasCalled } from "../snapshot-serializer";

import checkSnapshot from "../";

const FixtureComponent = () => <p>I'm a fixture component</p>;

describe("check-snapshot", () => {
  it("works...", () => {
    expect(() => checkSnapshot(<FixtureComponent />)).toThrow(iWasCalled());
  });
});
