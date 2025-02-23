import { useState } from "react";
import "./ComicList.css";

export default function ComicList() {
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly" | "alltime">("weekly");

  const comicData: Record<
    "weekly" | "monthly" | "alltime",
    { title: string; cover: string; genres: string[]; rating: number }[]
  > = {
    weekly: [
      { title: "Solo Max-Level Newbie", cover: "./cover3.png", genres: ["Action", "Adventure"], rating: 9.2 },
      { title: "Nano Machine", cover: "./cover1.png", genres: ["Drama", "Fantasy"], rating: 8.5 },
      { title: "Infinite Gacha", cover: "./cover5.png", genres: ["Comedy", "Action"], rating: 9.0 },
      { title: "Mount Hua Sect", cover: "./cover2.png", genres: ["Romance", "Adventure"], rating: 8.8 },
      { title: "Zenith", cover: "./cover4.png", genres: ["Thriller", "Mystery"], rating: 9.3 },
      { title: "Novels Extra", cover: "./cover6.png", genres: ["Action", "Comedy"], rating: 8.7 },
      { title: "Logging 1000 Years", cover: "./cover7.png", genres: ["Sci-Fi", "Action"], rating: 8.9 },
    ],
    monthly: [
      { title: "Mount Hua Sect", cover: "./cover2.png", genres: ["Romance", "Adventure"], rating: 8.8 },
      { title: "Zenith", cover: "./cover4.png", genres: ["Thriller", "Mystery"], rating: 9.3 },
      { title: "Nano Machine", cover: "./cover1.png", genres: ["Drama", "Fantasy"], rating: 8.5 },
      { title: "Solo Max-Level Newbie", cover: "./cover3.png", genres: ["Action", "Adventure"], rating: 9.2 },
      { title: "Infinite Gacha", cover: "./cover5.png", genres: ["Comedy", "Action"], rating: 9.0 },
      { title: "Novels Extra", cover: "./cover6.png", genres: ["Action", "Comedy"], rating: 8.7 },
      { title: "Logging 1000 Years", cover: "./cover7.png", genres: ["Sci-Fi", "Action"], rating: 8.9 },
    ],
    alltime: [
      { title: "Infinite Gacha", cover: "./cover5.png", genres: ["Comedy", "Action"], rating: 9.0 },
      { title: "Solo Max-Level Newbie", cover: "./cover3.png", genres: ["Action", "Adventure"], rating: 9.2 },
      { title: "Mount Hua Sect", cover: "./cover2.png", genres: ["Romance", "Adventure"], rating: 8.8 },
      { title: "Zenith", cover: "./cover4.png", genres: ["Thriller", "Mystery"], rating: 9.3 },
      { title: "Nano Machine", cover: "./cover1.png", genres: ["Drama", "Fantasy"], rating: 8.5 },
      { title: "Novels Extra", cover: "./cover6.png", genres: ["Action", "Comedy"], rating: 8.7 },
      { title: "Logging 1000 Years", cover: "./cover7.png", genres: ["Sci-Fi", "Action"], rating: 8.9 },
    ],
  };

  return (
    <div className="comic-list-container">
      <div className="comic-header2">Popular</div>
      <div className="comic-tabs">
        {(["weekly", "monthly", "alltime"] as const).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "comic-tab active" : "comic-tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="comic-list">
        {comicData[activeTab].map((comic, index) => (
          <div key={index} className="comic-item2">
            <div className="comic-rank">{index + 1}</div>
            <img className="comic-cover" src={comic.cover} alt={comic.title} />
            <div className="comic-info">
              <p className="comic-title2"><a href="#">{comic.title}</a></p>
              <div className="comic-genres">
                <strong>Genres:</strong> {comic.genres.join(", ")}
              </div>
              <div className="comic-rating">
                <strong>Rating:</strong>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`star ${i < Math.floor(comic.rating) ? "filled" : ""}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span>{comic.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
