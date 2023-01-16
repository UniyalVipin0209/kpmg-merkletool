import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store";

//Custom Component CSS
import "./style/components/my-component.css";
const loader = document.querySelector("#preloader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

setTimeout(
  () =>
    // the show/hide functions are passed as props
    ReactDOM.render(
      <Provider store={store}>
        <App hideLoader={hideLoader} showLoader={showLoader} />
      </Provider>,
      document.getElementById("root")
    ),
  700
);
// ReactDOM.render(
//   // <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );
