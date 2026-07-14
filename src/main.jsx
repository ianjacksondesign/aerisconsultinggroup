import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, HashProvider } from "react-router";
// Pages
import Home from "./pages/Home";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// CSS
import "./assets/scss/custom.css";
import "bootstrap-icons/font/bootstrap-icons.css";

let router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    basename: "/aerisconsultinggroup/",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <main>
      <HashProvider router={router} />
    </main>
    <Footer />
  </StrictMode>,
);
