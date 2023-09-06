import { Component, lazy } from "solid-js";
import { Router, Route } from "solid-app-router";
import Header from "./components/Header";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./views/Home")),
  },
  {
    path: "/about",
    component: lazy(() => import("./views/About")),
  },
  {
    path: "*all",
    component: lazy(() => import("./views/NotFound")),
  },
];

const App: Component = () => {
  return (
    <Router routes={routes}>
      <div
        class="min-h-screen"
        style={`background: linear-gradient(180deg, #DBEAFE 0%, #EDE9FE 25%, #E5E7EB 60%);`}
      >
        <Header title="home"></Header>
        <main className="bg-white max-w-md m-auto shadow-lg rounded-2xl">
          <Route />
        </main>
      </div>
    </Router>
  );
};

export default App;
