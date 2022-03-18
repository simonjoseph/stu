import React from "react";
import { render } from "react-dom";
import "babel-polyfill";

import App from "./components/App";

import "./globals.css";

render(<App />, document.getElementById("root"));
