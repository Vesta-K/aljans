import NavbarDefault from "../header/Header";
import MainPage from "../../pages/mainPage/MainPage";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import ModulsTowers from "../../pages/moduls/modulsTowers";

export default function PageWrapper() {
  return (
    <>
      <NavbarDefault />
      <Routes>
        <Route path="/aljans/" element={<MainPage />} />
        <Route path="/aljans/moduls" element={<ModulsTowers />} />
      </Routes>
      <Footer />
      {/* <NavbarDefault />
      <MainPage />
      <Footer /> */}
    </>
  );
}
