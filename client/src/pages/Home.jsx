
import Carousel from "../components/Carousel/Carousel";
import SectionName from "../components/SectionName";
import PropertyTypesSection from "../components/PropertyTypes/PropertyTypesSection";
import PropertiesBestsellers from "../components/PropertiesBestsellers/PropertiesBestsellers";

function App() {
  return (
    <>
      <SectionName name={"Always choose experience"} />
      <Carousel />
      <SectionName name={"Choose your type of place"} />
      <PropertyTypesSection />
      <SectionName name={"See our bestsellers"} />
      <PropertiesBestsellers />
    </>
  );
}

export default App;
