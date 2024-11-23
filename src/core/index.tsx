import "@/ui/styles/main.css";
import { type FC, StrictMode } from "react";
import { Router } from "./router";
import "@fontsource-variable/plus-jakarta-sans";

export const Core: FC = () => (
  <StrictMode>
    <Router />
  </StrictMode>
);
