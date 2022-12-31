import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./root/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { extendedTodoSlice } from "./features/todoSlice";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch(extendedTodoSlice.endpoints.getTodos.initiate());

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
