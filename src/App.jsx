import Navbar from "./components/Navbar";
import Accordion from "./components/pages/Accordion";
import Filter from "./components/pages/Filter";
import GradBg from "./components/pages/GradBg";
import Hero from "./components/pages/Hero";
import MissionVision from "./components/pages/MissionVision";
import Partner from "./components/pages/Partner";
import Profile from "./components/pages/Profile";
import Progress from "./components/pages/Progress";
import Services from "./components/pages/Services";
import Speciality from "./components/pages/Speciality";
import Testimonial from "./components/pages/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-hanken w-full">
      <Navbar />
        <Hero />
        <Partner />
        <MissionVision />
        <Profile />
        <Progress />
        <Services />
        <GradBg />
        <Filter />
        <Speciality />
        <Testimonial />
        <Accordion />
      <Footer />
    </div>
  );
}

export default App;
