import React from "react";
import store from "./containers/store/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import GitSearch from "../src/components/GitUserSearch/GitUserSearch";

const App = () => (
    <Provider store={store}>
        <GitSearch />
    </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));
