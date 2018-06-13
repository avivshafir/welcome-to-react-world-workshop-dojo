import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Movie } from "../App";

const movie = { poster_path: "MvYpKlpFukTivnlBhizGbkAe3v.jpg" };

storiesOf("Movie", module).add("with Movie", () => (
  <Movie movie={movie}>Hello Movie</Movie>
));
