import Navbar from "./Components/navbar/Navbar";
import ContactBanner from "./Components/VideoBanner/ContactBanner";
import VideoBanner from "./Components/VideoBanner/VideoBanner";
import WorkSlider from "./Components/WorkSlider/WorkSlider";


function App() {
  return (
    <div className="lg:p-[25px]">
      <VideoBanner />
      <ContactBanner />

    </div>
  );
}

export default App;
