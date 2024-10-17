import "./App.css";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import LanguageWrapper from "./components/languageWrapper/languageWrapper";
import { Suspense } from "react";

const AppContent = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Navigate replace to="/en" />
    },
    {
      path: ":lang",
      element: <LanguageWrapper />,
      children: [
        {path: "", element: <Home />},
        {path: "about", element: <About />},
      ]
    },
    {
      path: "*",
      element: <Navigate replace to="/en" />
    },
  ])
  return (
    <Suspense fallback={<div>Loading Translations . . .</div>}>
      {routes}
    </Suspense>
  )
}

function App() {
  return (
  <BrowserRouter>
   <AppContent/>
  </BrowserRouter>
  );
}

export default App;
