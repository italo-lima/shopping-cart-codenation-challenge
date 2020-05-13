import React from 'react';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"

import {LayoutGlobal} from "./global"

import Routes from "./routes"
import Header from "./components/Header"
import store from "./store"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <LayoutGlobal/>
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
