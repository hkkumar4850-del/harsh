import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScroll>
      <Cursor />
      <App />
    </SmoothScroll>
  </StrictMode>,
);
