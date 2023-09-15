import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ParallaxProvider>
  </React.StrictMode>
);
