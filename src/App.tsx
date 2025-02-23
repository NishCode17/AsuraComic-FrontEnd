import Nav from "./components/nav.tsx";
import ComicSlider from "./components/Comicslider.tsx";
import ComicOfTheMonth from "./components/ComicOfTheMonth.tsx";
import ComicList from "./components/ComicList.tsx";
import PopularToday from "./components/PopularToday.tsx";
import LatestUpdates from "./components/LatestUpdates.tsx";
import Footer from "./components/Footer.tsx"; // Import Footer component

import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <div className="main-container">
        {/* Left Container */}
        <div className="left-container">
          <div className="left-row">
            <ComicSlider />
            <ComicOfTheMonth />
          </div>
          <div className="popular-today">
            <PopularToday />
          </div>
          <div className="latest-update">
            <LatestUpdates />
          </div>
        </div>

        {/* Right Container */}
        <div className="right-container">
          <ComicList />
        </div>
      </div>

      {/* Footer Component */}
      <Footer /> {/* Use Footer here */}
    </div>
  );
}

export default App;
