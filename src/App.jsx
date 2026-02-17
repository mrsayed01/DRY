import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import History from "./pages/History";
import Landmarks from "./pages/Landmarks";
import Gallery from "./pages/Gallery";
import AudioPage from "./pages/AudioPage";
import VideoPage from "./pages/VideoPage";
import MoaVoiceNotes from "./pages/MoaVoiceNotes";
import MoaVideos from "./pages/MoaVideos";
import Possessions from "./pages/Possessions";
import Resources from "./pages/Resources";
import Territories from "./pages/Territories";
import Barracks from "./pages/Barracks";
import Seaport from "./pages/Seaport";
import Airports from "./pages/Airports";
import Borders from "./pages/Borders";
import Secretariats from "./pages/Secretariats";
import GovernmentProperties from "./pages/GovernmentProperties";
import Culture from "./pages/Culture";
import Drums from "./pages/Drums";
import TribalMarks from "./pages/TribalMarks";
import Games from "./pages/Games";
import BeautyHair from "./pages/BeautyHair";
import Artifacts from "./pages/Artifacts";
import Music from "./pages/Music";
import Stickers from "./pages/Stickers";
import Flyers from "./pages/Flyers";
import Greetings from "./pages/Greetings";
import Dancing from "./pages/Dancing";
import Masquerade from "./pages/Masquerade";
import Costumes from "./pages/Costumes";
import Profession from "./pages/Profession";
import Trades from "./pages/Trades";
import Tools from "./pages/Tools";
import Fashion from "./pages/Fashion";
import Food from "./pages/Food";
import Festivals from "./pages/Festivals";
import MarriageCeremony from "./pages/MarriageCeremony";
import NamingCeremony from "./pages/NamingCeremony";
import StateDetail from "./pages/StateDetail";
import ServiceDetail from "./pages/ServiceDetail";
import Infrastructure from "./pages/Infrastructure";
import Education from "./pages/Education";
import Healthcare from "./pages/Healthcare";
import Agriculture from "./pages/Agriculture";
import CulturePreservation from "./pages/CulturePreservation";
import DigitalEconomy from "./pages/DigitalEconomy";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Help from "./pages/Help";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/landmarks" element={<Landmarks />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/gallery/stickers" element={<Stickers />} />
        <Route exact path="/gallery/flyers" element={<Flyers />} />
        <Route exact path="/audio" element={<AudioPage />} />
        <Route exact path="/video" element={<VideoPage />} />
        <Route exact path="/history/voice-notes" element={<MoaVoiceNotes />} />
        <Route exact path="/history/videos" element={<MoaVideos />} />
        <Route exact path="/possessions" element={<Possessions />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/territories" element={<Territories />} />
        <Route exact path="/barracks" element={<Barracks />} />
        <Route exact path="/seaport" element={<Seaport />} />
        <Route exact path="/airports" element={<Airports />} />
        <Route exact path="/borders" element={<Borders />} />
        <Route exact path="/secretariats" element={<Secretariats />} />
        <Route exact path="/properties" element={<GovernmentProperties />} />
        <Route exact path="/culture" element={<Culture />} />
        <Route exact path="/culture/drums" element={<Drums />} />
        <Route exact path="/culture/tribal-marks" element={<TribalMarks />} />
        <Route exact path="/culture/games" element={<Games />} />
        <Route exact path="/culture/beauty-hair" element={<BeautyHair />} />
        <Route exact path="/culture/artifacts" element={<Artifacts />} />
        <Route exact path="/culture/music" element={<Music />} />
        <Route exact path="/culture/greetings" element={<Greetings />} />
        <Route exact path="/culture/dancing" element={<Dancing />} />
        <Route exact path="/culture/masquerade" element={<Masquerade />} />
        <Route exact path="/culture/costumes" element={<Costumes />} />
        <Route exact path="/culture/profession" element={<Profession />} />
        <Route exact path="/culture/trades" element={<Trades />} />
        <Route exact path="/culture/tools" element={<Tools />} />
        <Route exact path="/culture/fashion" element={<Fashion />} />
        <Route exact path="/culture/food" element={<Food />} />
        <Route exact path="/culture/festivals" element={<Festivals />} />
        <Route exact path="/culture/marriage" element={<MarriageCeremony />} />
        <Route exact path="/culture/naming" element={<NamingCeremony />} />
        <Route exact path="/state/:id" element={<StateDetail />} />
        <Route exact path="/services/:slug" element={<ServiceDetail />} />
        <Route exact path="/initiatives/infrastructure" element={<Infrastructure />} />
        <Route exact path="/initiatives/education" element={<Education />} />
        <Route exact path="/initiatives/healthcare" element={<Healthcare />} />
        <Route exact path="/initiatives/agriculture" element={<Agriculture />} />
        <Route exact path="/initiatives/culture" element={<CulturePreservation />} />
        <Route exact path="/initiatives/digital-economy" element={<DigitalEconomy />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/cookies" element={<Cookies />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}
