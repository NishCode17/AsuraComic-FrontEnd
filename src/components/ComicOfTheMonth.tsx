import "./COTM.css";

export default function ComicOfTheMonth() {
    const comic = {
      cover: "./cover5.png",
      title: "Infinite Gacha"
    };
  
    return (
      <div
        className="comic-month-container"
        style={{ backgroundImage: `url(${comic.cover})` }}
      >
        <div className="overlay">
          <h1>Asura Scans <b>Trending</b> this Week</h1>
          <h2 className="comic-month-title">{comic.title}</h2>
        </div>
      </div>
    );
  }