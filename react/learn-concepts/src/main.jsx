import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Testing from "./hoc/Testing.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App name={"App 1"} />
    <App name={"App 2"} />
    <App name={"App 3"} />
    <App name={"App 4"} />
    <Testing name="testing from main" />
  </>,
);
