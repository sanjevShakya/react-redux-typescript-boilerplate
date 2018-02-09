import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";

const appElement = document.createElement("div");
appElement.className = "main-wrapper";
document.body.appendChild(appElement);

ReactDOM.render(<App />, appElement);
