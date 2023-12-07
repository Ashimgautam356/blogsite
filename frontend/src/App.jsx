import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingLayout from "./layouts/LandingLayout";
import Home from "./pages/Home";
import GearPg from "./pages/GearPg";
import FoodDrinkPg from "./pages/FoodDrinkPg";
import HealthFitnessPg from "./pages/HealthFitnessPg";
import NewsPg from "./pages/NewsPg"
import StylePg from "./pages/StylePg"
import TravelPg from "./pages/TravelPg"
import GearLayout from "./layouts/GearLayout";
import SearchPg from "./pages/SearchPg";
import Admin from "./pages/Admin";


const App = () => {
  return (
      <BrowserRouter>
          <Routes>

            <Route path="/" element={<LandingLayout></LandingLayout>}>
              <Route index element={<Home />}></Route>
              <Route path="/gear" element={<GearLayout></GearLayout>}>
                <Route index element={<GearPg />}></Route>
              </Route>
              <Route path="/food" element={<FoodDrinkPg></FoodDrinkPg>}></Route>
              <Route path="/fitness" element={<HealthFitnessPg></HealthFitnessPg>}></Route>
              <Route path="/style" element={<StylePg></StylePg>}></Route>
              <Route path="/travel" element={<TravelPg></TravelPg>}></Route>
              <Route path="/news" element={<NewsPg></NewsPg>}></Route>
              <Route path="/search" element={<SearchPg></SearchPg>}></Route>
            </Route>
              <Route path="/admin" element={<Admin></Admin>}></Route>

          </Routes>
      </BrowserRouter>
  );
};

export default App;
