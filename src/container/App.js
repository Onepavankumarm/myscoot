import "./App.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutUs from "../components/About-Us";
import Card from "../components/Card";
import GetInTuch from "../components/Get-In-Tuch";
 import Strength from "../components/Strength";
import FeedBack from "../components/FeedBack";
import Instructors from "../components/Instructors";
import Protfolio from "../components/Protfolio";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <Card />
      <GetInTuch />
      <Strength />
      <FeedBack />
      <Instructors />
      <Protfolio />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
