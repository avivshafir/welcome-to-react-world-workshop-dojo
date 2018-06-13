import React from "react";
import ReactDOM from "react-dom";
import { Movies, Movie } from "./App";
import { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";

const movies = [
  { poster_path: "banana" },
  { poster_path: "banana" },
  { poster_path: "banana" }
];

describe("App", () => {
  it("Movie an image", () => {
    var wrapper = shallow(<Movie movie={{ poster_path: "banana" }} />);
    expect(wrapper.find("img").length).toBe(1);
  });
  it("Movies renderes 3 Movies", () => {
    var app = shallow(<Movies movies={movies} />);
    expect(app.find(Movie).length).toBe(3);
  });
  it("Movies snapshot test", () => {
    const tree = renderer.create(<Movies movies={movies} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
