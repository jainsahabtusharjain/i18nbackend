import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18next/i18next.js"; // Import your i18n instance
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}> {/* Wrap with I18nextProvider */}
      <App />
    </I18nextProvider>
  </StrictMode>
);
