import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './Home/Home';

const Client = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} />
  )
);

export default Client;
