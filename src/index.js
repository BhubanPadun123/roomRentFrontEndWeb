/**

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Provider } from "react-redux";
import Store from "redux/store";

import { MaterialUIControllerProvider } from "context";

ReactDOM.render(
  <Provider store={ Store } >
    <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
