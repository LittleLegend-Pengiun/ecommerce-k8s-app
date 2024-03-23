import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routers";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { Fragment } from "react";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Component = route.component;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
