import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "bootstrap/dist/css/bootstrap.min.css";
import OurNav from "./components/Navbar.tsx";
import Create from "./routes/Create.tsx";
import View from "./routes/View.tsx";
import Root from "./routes/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <OurNav />
        <Root />
      </>
    ),
    errorElement: (
      <>
        <OurNav />
        <ErrorPage />
      </>
    ),
  },
  {
    path: "/view",
    element: (
      <>
        <OurNav />
        <View />
      </>
    ),
  },
  {
    path: "/create",
    element: (
      <>
        <OurNav />
        <Create />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
