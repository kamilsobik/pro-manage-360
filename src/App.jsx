import { Route, Routes } from "react-router-dom";
import "./css/index.css";

import HomePage from "./pages/HomePage";
import NotFound from "./utils/NotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
