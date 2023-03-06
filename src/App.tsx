import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import GioiThieu from "./components/pages/GioiThieu/GioiThieu";
import TrangChu from "./components/pages/TrangChu/TrangChu";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/GioiThieu" element={<GioiThieu />} />
      </Routes>
    </Fragment>
  );
};

export default App;
