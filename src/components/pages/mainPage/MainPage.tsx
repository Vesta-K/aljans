import { YMaps } from "@pbe/react-yandex-maps";
import Advantages from "../../blocks/Advantages/Advantages";
import Contacts from "../../blocks/Contacts/contact";
import Hero from "../../blocks/Hero/Hero";
import UsProjects from "../../blocks/UsProjects/UsProjects";

export default function MainPage() {
  return (
    <>
      <Hero />
      <UsProjects />
      <Advantages />
      <YMaps query={{ apikey: "3393c833-d9af-455e-aeac-c97893c9816d" }}>
        <Contacts />
      </YMaps>
    </>
  );
}
