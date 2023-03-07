import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import GioiThieu from "./components/pages/GioiThieu/GioiThieu";
import LienHe from "./components/pages/LienHe/LienHe";
import SanPham from "./components/pages/SanPham/SanPham";
import TinTuc from "./components/pages/TinTuc/TinTuc";
import TrangChu from "./components/pages/TrangChu/TrangChu";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/GioiThieu" element={<GioiThieu />} />

        <Route path="/SanPham" element={<SanPham />} />
        <Route path="/TinTuc" element={<TinTuc />} />
        <Route path="/LienHe" element={<LienHe />} />
      </Routes>
    </Fragment>
  );
};

export default App;
