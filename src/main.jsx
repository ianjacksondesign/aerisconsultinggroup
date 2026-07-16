import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider, Outlet } from "react-router";
// Pages
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// CSS
import "./assets/scss/custom.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Layout = () => (
  <div className="pageWrapper">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/programs", element: <Programs /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    basename: "/aerisconsultinggroup/",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
