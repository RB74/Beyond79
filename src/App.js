import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import FAQ from "./pages/FAQ";
import ResourceMaps from "./pages/ResourceMaps";
import GetInvolved from "./pages/GetInvolved";
import RequestHelp from "./pages/RequestHelp";
import ResultPage from "./pages/ResultPage";
import LandingPage from "./pages/LandingPage";
import Search from "./pages/Search";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/search" element={<Search />} />
      <Route path="/resource-maps" element={<ResourceMaps />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/request-help" element={<RequestHelp />} />
      <Route path="/result-page" element={<ResultPage />} />
    </Routes>
  );
}
export default App;
