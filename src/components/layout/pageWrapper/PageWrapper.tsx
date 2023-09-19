import NavbarDefault from "../header/Header";
import MainPage from "../../pages/mainPage/MainPage";
import Footer from "../Footer/Footer";

export default function PageWrapper() {
  return (
    <>
      <NavbarDefault />
      <MainPage />
      <Footer />
    </>
  );
}
