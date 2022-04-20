import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Contextprovider } from "./Context/Contextprovider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Contextprovider>
      <App />
    </Contextprovider>
  </StrictMode>
);
