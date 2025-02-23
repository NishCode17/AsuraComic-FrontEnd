import { useState, useEffect } from "react";
import "./comic.css";

const comics = [
  { id: 1, title: "Solo Leveling", cover: "./cover1.png", info: "A story about a weak hunter who becomes the strongest after a mysterious event." },
  { id: 2, title: "Nano Machine", cover: "./cover2.png", info: "A story of a young martial artist who receives a nano machine and becomes powerful." },
  { id: 3, title: "Solo Max-Level Newbie", cover: "./cover3.png", info: "The protagonist gets a chance to start over with the maximum level and changes his fate." },
  { id: 4, title: "Mount Hua Sect", cover: "./cover4.png", info: "A martial arts story set in the legendary Mount Hua sect." },
  { id: 5, title: "Infinite Gacha", cover: "./cover5.png", info: "A young man receives a mysterious gacha machine that can change his life." },
  { id: 6, title: "Zenith", cover: "./cover6.png", info: "A thrilling story filled with mystery and action, set in a high-tech world." },
  { id: 7, title: "Novels Extra", cover: "./cover7.png", info: "A novel reader gets involved in a world where novels become reality." },
  { id: 8, title: "Logging 1000 Years", cover: "./cover8.png", info: "A tale of a man who logs into a mysterious world and lives for over a thousand years." },
  { id: 9, title: "Swordmaster's Youngest Son", cover: "./cover9.png", info: "The youngest son of a legendary swordmaster embarks on a journey to prove his worth." },
  { id: 10, title: "Wudang Warrior", cover: "./cover10.png", info: "A story following a warrior from the prestigious Wudang clan, battling against evil." },
];

export default function ComicSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="comic-slider" style={{ backgroundImage: `url(${comics[currentIndex].cover})` }}>
      
      {/* Overlay */}
      <div className="comic-slide">
        <div className="comic-info">
          <h2 className="comic-title1"><a href="#">{comics[currentIndex].title}</a></h2>
          <p className="summary">Summary</p>
          <p className="comic-description">{comics[currentIndex].info} <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in purus nulla. Morbi feugiat tortor eu sem egestas, et auctor felis elementum. Sed quis cu id metus varius maximus. Sed ut egestas ante. Nunc id ligula vitae libero malesuada lacinia.</p>
          <p className="summary"> Status : Ongoing</p>
        </div>
        <img src={comics[currentIndex].cover} alt={comics[currentIndex].title} />
      </div>
  
      <div className="comic-navigation">
        {comics.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`comic-dot ${index === currentIndex ? "active" : ""}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
