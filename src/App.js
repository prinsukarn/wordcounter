import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
