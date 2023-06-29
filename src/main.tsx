import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "bootstrap/dist/css/bootstrap.min.css";
import OurNav from "./components/Navbar.tsx";
import Create from "./routes/Create.tsx";
import ViewAll from "./routes/ViewAll.tsx";
import Root from "./routes/Root.tsx";
import ViewOne from "./routes/ViewOne.tsx";
import RootContainer from "./components/RootContainer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootContainer />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/view",
        element: <ViewAll />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/view/:id",
        element: <ViewOne />,
      },
    ],
    errorElement: (
      <>
        <OurNav />
        <ErrorPage />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
