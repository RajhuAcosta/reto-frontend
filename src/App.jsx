// import './App.css'

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import View1 from "./pages/View1";
import View2 from "./pages/View2";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/view1" element={<View1 />}></Route>
        <Route path="/view2" element={<View2 />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
