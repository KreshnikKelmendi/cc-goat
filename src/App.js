import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import WorkPage from "./Components/Pages/WorkPage";
import SinglePageOfWork from "./Components/Pages/SinglePageOfWork";


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:workID" element={<SinglePageOfWork />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
