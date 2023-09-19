import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/:userId/places" element={<UserPlaces />} exact />
        <Route path="/places/new" element={<NewPlace />} exact />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
      </Routes>
    );
}
else {
  routes = (
    <Routes>
      <Route path="/" element={<Users />} exact />
      <Route path="/:userId/places" element={<UserPlaces />} exact />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

return (
  <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
    <Router>
      <MainNavigation />
      <main>{routes}</main>
    </Router>
  </AuthContext.Provider>
);

}

export default App;
