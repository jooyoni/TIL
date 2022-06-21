import react from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { counter, reducer } from "./store";

const store=createStore(reducer);
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"))