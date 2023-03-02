import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import TrangChu from "./components/pages/TrangChu/TrangChu";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<TrangChu />} />
      </Routes>
    </Fragment>
  );
};

export default App;
