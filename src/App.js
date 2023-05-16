import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { NavigationBar } from "./components";
import {Home,Success} from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <main>
          <Routes>
            <Route 
              path='/' element={<Home />}
            />

            <Route 
              path='/success' element={<Success />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    )
  }
}
