import React from "react";
import { RouterProvider } from "react-router-dom";
import Client from "./pages/client";
import Admin from "./pages/admin"
function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={Client} />
    </React.StrictMode>
  );
}

export default App;

