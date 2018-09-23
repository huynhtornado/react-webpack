import * as React from "react";
import * as ReactDOM from "react-dom";

import { Dashboard } from "./components/dashboard";

ReactDOM.render(
    <Dashboard compiler={"Reactjs"} framework={"React-webpack"} />,
    document.getElementById("example")
);