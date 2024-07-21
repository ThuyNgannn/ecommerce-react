import React from "react";
import { RouterProvider } from "react-router-dom";
import Client from "./pages";
import RouterAdmin from "./pages/admin/src";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={Client} />
      <RouterAdmin />
    </React.StrictMode>
  );
}

export default App;
