import "./PopularToday.css";

const popularComics = [
  { title: "Solo Leveling", cover: "./cover1.png", rating: 9.5, chapter: 63 },
  { title: "Nano Machine", cover: "./cover2.png", rating: 9.2, chapter: 45 },
  { title: "Solo Max-Level Newbie", cover: "./cover3.png", rating: 9.7, chapter: 78 },
  { title: "Mount Hua Sect", cover: "./cover4.png", rating: 9.0, chapter: 55 },
  { title: "Infinite Gacha", cover: "./cover5.png", rating: 9.8, chapter: 23 },
];

export default function PopularToday() {
  return (
    <div className="popular-today-container">
      <h2 className="popular-header">&nbsp; Popular Today</h2>
      <div className="popular-list">
        {popularComics.map((comic, index) => (
          <div key={index} className="popular-item">
            <img className="popular-cover" src={comic.cover} alt={comic.title} />
            <p className="popular-title"><a href="#">{comic.title}</a></p>
            {/* Chapter number */}
            <p className="chapter-link2">
              <a href="/">Chapter {comic.chapter}</a></p>
            {/* Rating */}
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
              <span className="rating-text">{comic.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
