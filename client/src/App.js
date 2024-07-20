import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/admin/src/App";
// import ClientPage from "./pages/client";

const adminRouter = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

// const clientRouter = createBrowserRouter([
//   {
//     path: "/client",
//     element: <ClientPage />,
//   },
// ]);

function App() {
  // Example: switching based on some condition
  const isAdmin = true; // Replace with actual condition
  // const router = isAdmin ? adminRouter : clientRouter;

  // return (
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );
}

export default App;
