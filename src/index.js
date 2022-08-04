import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateComponent from "./components/PrivateComponent";
import NoMatch from "./containers/NoMatch";
import Login from "./containers/Login";
import RecipeList from "./containers/RecipeList";
import RecipeDetail from "./containers/RecipeDetail";
import Register from "./containers/Register";
import ResultSearch from "./containers/ResultSearch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateComponent>
              <App />
            </PrivateComponent>
          }
        >
          <Route path="/" element={<RecipeList />} />
          <Route path="detail/:key" element={<RecipeDetail />} />
          <Route path="results/:q" element={<ResultSearch />} />
        </Route>
        <Route
          path="login"
          element={
            <PrivateComponent loginOnly={false}>
              <Login />
            </PrivateComponent>
          }
        />
        <Route
          path="register"
          element={
            <PrivateComponent loginOnly={false}>
              <Register />
            </PrivateComponent>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
