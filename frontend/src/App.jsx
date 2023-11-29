import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingLayout from "./layouts/LandingLayout";
import Home from "./pages/Home";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>

            <Route path="/" element={<LandingLayout></LandingLayout>}>
              <Route index element={<Home />}></Route>
              
            </Route>

          </Routes>
      </BrowserRouter>
  );
};

export default App;
